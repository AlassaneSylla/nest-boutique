/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './interfaces/products.interface';
import { ProductsModelName } from './schemas/product.model-name';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(ProductsModelName) private productModel: Model<IProduct>) {}
    private products = [
        { _id: 1, title: 'Banane' },
        { _id: 2, title: 'Pomme' },
        { _id: 3, title: 'Mangue' }
    ]

    findAll() {
        return this.productModel.find();
    }

    insertOne(product) {
        return this.productModel.create(product);
        //this.products.push(product);
        //return product;
    }

    async deleteOne(id) {
        const result = await this.productModel.deleteOne({ _id: id });
        return Boolean(result.deletedCount);
        /*const index = this.products.findIndex((product) => product._id == id);
        if (index < 0) {
            throw new NotFoundException();
        } 
        this.products.splice(index, 1);
        return true;*/
    }

    update(id, product) {
        const index = this.products.findIndex((product) => product._id == id);
        if(index < 0) {
            throw new NotFoundException();
        }
        this.products[index] = { ...this.products[index], ...product };
        return this.products[index];
    }
}
