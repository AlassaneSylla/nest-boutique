/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    finsAll() {
        return this.productsService.findAll();      
    }

    @Post() 
    insert(@Body() product) { 
       return this.productsService.insertOne(product);      
    }

    @Delete('/:_id')
    deleteOne(@Param('_id') productId) {
        return this.productsService.deleteOne(productId);
    }

    @Put('/:_id')
    update(@Param('_id') productId, @Body() product) {
        return this.productsService.update(productId, product);
    }
    
}
