import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/entities/product.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductUpdateDto } from './dto/product-update.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(product: ProductCreateDto): Promise<Product> {
    return this.productRepo.save({ ...product });
  }

  async findOne(id: number): Promise<Product | null> {
    const where: FindOptionsWhere<Product> = { id };
    return this.productRepo.findOne({ where });
  }

  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async update(id: number, updates: ProductUpdateDto): Promise<Product | null> {
    const product = await this.findOne(id);
    if (!product) return null;

    Object.assign(product, updates);

    return this.productRepo.save(product);
  }

  async remove(id: number): Promise<Omit<Product, 'id'> | null> {
    const product = await this.findOne(id);
    if (!product) return null;

    return this.productRepo.remove(product);
  }
}
