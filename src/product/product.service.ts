import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ProductService {
  constructor(private readonly dbService: DbService) {}

  create(product: any) {
    this.dbService.create(product);
  }

  findOne(id: number) {
    return this.dbService.findOne(id);
  }

  findAll() {
    return this.dbService.findAll();
  }
}
