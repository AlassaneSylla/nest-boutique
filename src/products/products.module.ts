import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ProductsModelName } from './schemas/product.model-name';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './schemas/products.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: ProductsModelName, schema: productSchema }])],
    controllers: [
        ProductsController,],
    providers: [
        ProductsService,],
})
export class ProductsModule { }
