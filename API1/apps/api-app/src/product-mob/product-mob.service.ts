import { ProductMobDto } from 'apps/api-app/src/product-mob/dto/create.dto';
import { ProductMob } from '@app/pg-library/dao/product-mob.';
import { InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { productProfile } from './dto/product.profile';

@Injectable()
export class ProductMobService {
  reflector: any;
  constructor(
    @InjectConnection('pg')
    private readonly connection: Connection,
    @InjectMapper() private readonly mapper: Mapper,
  ) {
    mapper.addProfile(productProfile);
  }

  async findAll(): Promise<ProductMob[]> {
    return await this.connection.getRepository(ProductMob).find();
  }

  async findById(id: string): Promise<ProductMob> {
    const product = await this.connection
      .getRepository(ProductMob)
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

  async findByName(name: string): Promise<ProductMob> {
    return await this.connection.getRepository(ProductMob).findOne({
      where: {
        name,
      },
    });
  }

  async findUnsentProducts(): Promise<ProductMob[]> {
    const products = await this.connection.getRepository(ProductMob).find();
    const filteredproducts = [];
    products.forEach((product) => {
      if (product.sent == false) {
        filteredproducts.push(product);
      }
    });
    return filteredproducts;
  }

  async save(product: ProductMobDto): Promise<ProductMob> {
    const newProduct = this.mapper.map(product, ProductMob, ProductMobDto);
    newProduct.sent = false;
    try {
      const savedProduct = await this.connection
        .getRepository(ProductMob)
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

  async update(product: Partial<ProductMob>) {
    try {
      const updatedProduct = await this.connection
        .getRepository(ProductMob)
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
