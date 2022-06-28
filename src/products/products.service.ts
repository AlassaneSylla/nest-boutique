/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        { _id: 1, title: 'Banane' },
        { _id: 2, title: 'Pomme' },
        { _id: 3, title: 'Mangue' }
    ]

    findAll() {
        return this.products;
    }

    insertOne(product) {
        this.products.push(product);
        return product;
    }

    deleteOne(id) {
        const index = this.products.findIndex((product) => product._id == id);
        if (index < 0) {
            throw new NotFoundException();
        } 
        this.products.splice(index, 1);
        return true;
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
