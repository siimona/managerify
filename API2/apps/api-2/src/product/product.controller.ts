import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from './dto/create-product.dto';
import { Product } from './entity/product.entity';

@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Post()
  save(@Body() product: ProductDto) {
    return this.productService.save(product);
  }

  @Patch()
  update(@Body() product: Product) {
    return this.productService.update(product);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.productService.delete(id);
  }
}
