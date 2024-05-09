import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCreateDto } from './dto/product-create.dto';
import { Product } from 'src/db/entities/product.entity';
import { ProductUpdateDto } from './dto/product-update.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() body: ProductCreateDto): Promise<Product> {
    const product = await this.productService.create(body);

    return product;
  }

  @Get('/:id')
  async get(@Param('id') id: number): Promise<Product> {
    const product = await this.productService.findOne(id);
    if (!product) throw new NotFoundException();

    return product;
  }

  @Get()
  async getAll(): Promise<Product[]> {
    const products = await this.productService.findAll();

    return products;
  }

  @Post('/:id')
  async update(
    @Param('id') id,
    @Body() body: ProductUpdateDto,
  ): Promise<Product> {
    const product = await this.productService.update(id, body);
    if (!product) throw new NotFoundException();

    return product;
  }

  @Delete('/:id')
  async remove(@Param('id') id: number): Promise<Omit<Product, 'id'>> {
    const product = await this.productService.remove(id);
    if (!product) throw new NotFoundException();

    return product;
  }
}
