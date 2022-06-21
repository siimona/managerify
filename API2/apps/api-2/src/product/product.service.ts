import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { ProductDto } from './dto/create-product.dto';
import { InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { productProfile } from './dto/product.profile';
import { from, lastValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ProductType } from './entity/product.enum';

@Injectable()
export class ProductService {
  reflector: any;
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectMapper() private readonly mapper: Mapper,
    private readonly httpService: HttpService,
  ) {
    mapper.addProfile(productProfile);
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productsRepository
      .findOne({
        where: {
          id,
        },
      })
      .catch(() => {
        throw new HttpException('Product Not Found', 404);
      });
    return product;
  }

  async save(product: ProductDto): Promise<Product> {
    const newProduct = this.mapper.map(product, Product, ProductDto);
    newProduct.stock = 50;
    try {
      const savedProduct = await this.productsRepository.save(newProduct);
      return savedProduct;
    } catch (err) {
      {
        if (err.message.includes('UNIQUE')) {
          throw new HttpException(
            {
              errors: { name: ['Duplicate Field'] },
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw new HttpException(err.message, 400);
    }
  }

  async update(product: Partial<Product>) {
    try {
      const updatedProduct = await this.productsRepository.save(product);
      return updatedProduct;
    } catch (err) {
      {
        if (err.message.includes('UNIQUE')) {
          throw new HttpException(
            {
              errors: { userName: ['Duplicate Field'] },
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw new HttpException(err.message, 400);
    }
  }

  delete(id: string) {
    from(this.productsRepository.delete(id));
  }

  async getProduct(id: string, productTyoe: string): Promise<ProductDto> {
    let data;
    if (productTyoe == ProductType.MOB) {
      data = await lastValueFrom(
        this.httpService
          .get(`http://localhost:4200/api/products-mob/product/${id}`)
          .pipe(map((resp) => resp.data)),
      );
      const product = {
        name: data.name,
        description: data.description,
        price: data.price,
        sku: data.sku,
        weight: data.weight,
        unit: data.unit,
        provider: data.provider,
      };
      return product;
    } else if (productTyoe == ProductType.SLK) {
      data = await lastValueFrom(
        this.httpService
          .get(`http://localhost:4200/api/products-slk/product/${id}`)
          .pipe(map((resp) => resp.data)),
      );
      const product = {
        name: data.name,
        description: data.info,
        price: data.price,
        sku: data.sku,
        weight: data.weight,
        unit: 'kg',
        provider: data.provider,
      };
      return product;
    }
    return null;
  }
}
