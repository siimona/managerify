import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), HttpModule],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService, TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}
