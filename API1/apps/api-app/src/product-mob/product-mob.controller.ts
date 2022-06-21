import { Controller, Get, Param, Post, Patch, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductMobService } from './product-mob.service';
import { ProductMob } from '@app/pg-library/dao/product-mob.';
import { ProductMobDto } from 'apps/api-app/src/product-mob/dto/create.dto';
@ApiTags('ProductMob')
@Controller('products-mob')
export class ProductMobController {
  constructor(private productService: ProductMobService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('/product/:id')
  find(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string) {
    return this.productService.findByName(name);
  }

  @Post()
  save(@Body() product: ProductMobDto) {
    return this.productService.save(product);
  }

  @Patch()
  update(@Body() product: ProductMob) {
    return this.productService.update(product);
  }

  @Get('/unsent')
  findUnsentProducts() {
    return this.productService.findUnsentProducts();
  }
}
