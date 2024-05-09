import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() body: any) {
    return this.productService.create(body);
  }

  @Get('/:id')
  get() {}

  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Delete()
  remove() {}
}
