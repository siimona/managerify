import { Controller, Get, Param, Post, Patch, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductSlkService } from './product-slk.service';
import { ProductSlk } from '@app/mssql-library/dao/product-slk.';
import { ProductSlkDto } from 'apps/api-app/src/product-slk/dto/create.dto';

@ApiTags('ProductSlk')
@Controller('products-slk')
export class ProductSlkController {
  constructor(private productService: ProductSlkService) {}

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
  save(@Body() product: ProductSlkDto) {
    return this.productService.save(product);
  }

  @Patch()
  update(@Body() product: ProductSlk) {
    return this.productService.update(product);
  }

  @Get('/unsent')
  findUnsentProducts() {
    return this.productService.findUnsentProducts();
  }
}
