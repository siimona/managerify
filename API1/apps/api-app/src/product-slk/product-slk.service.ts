import { InjectEntityManager } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { productProfile } from './dto/product.profile';
import { ProductSlk } from '@app/mssql-library/dao/product-slk.';
import { ProductSlkDto } from 'apps/api-app/src/product-slk/dto/create.dto';

@Injectable()
export class ProductSlkService {
  reflector: any;
  constructor(
    @InjectEntityManager('mssql')
    private readonly connection: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    mapper.addProfile(productProfile);
  }

  async findAll(): Promise<ProductSlk[]> {
    return await this.connection.getRepository(ProductSlk).find();
  }

  async findById(id: string): Promise<ProductSlk> {
    const product = await this.connection
      .getRepository(ProductSlk)
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

  async findByName(name: string): Promise<ProductSlk> {
    return await this.connection.getRepository(ProductSlk).findOne({
      where: {
        name,
      },
    });
  }

  async findUnsentProducts(): Promise<ProductSlk[]> {
    const products = await this.connection.getRepository(ProductSlk).find();
    const filteredproducts = [];
    products.forEach((product) => {
      if (product.sent == 0) {
        filteredproducts.push(product);
      }
    });
    return filteredproducts;
  }

  async save(product: ProductSlkDto): Promise<ProductSlk> {
    const newProduct = this.mapper.map(product, ProductSlk, ProductSlkDto);

    try {
      const savedProduct = await this.connection
        .getRepository(ProductSlk)
        .save(newProduct);
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

  async update(product: Partial<ProductSlk>) {
    try {
      const updatedProduct = await this.connection
        .getRepository(ProductSlk)
        .save(product);
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
}
