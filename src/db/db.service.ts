import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  products: { id: number; name: string; new: boolean }[] = [];

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  findAll() {
    return this.products;
  }

  create(product: any) {
    this.products.push(product);
  }

  remove(id: number) {
    const productIndex = this.products.findIndex(
      (product) => id === product.id,
    );
    
    // this.products.splice();
  }
}
