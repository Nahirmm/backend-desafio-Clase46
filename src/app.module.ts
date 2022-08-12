import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from 'common/env.helper';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }), 
    MongooseModule.forRoot('mongodb+srv://Nahirmm:Clave12345.@cluster0.cdxyz.mongodb.net/?retryWrites=true&w=majority'),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
