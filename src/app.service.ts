import { Injectable, Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';



@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
