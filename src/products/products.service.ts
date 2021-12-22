import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
      ) {}

      async insertProduct(name: string, quant: number, price: number) {
        const newProduct = new this.productModel({
          name,
          quantity: quant,
          price,
        });
        const result = await newProduct.save();
        return result.id as string;
      }

      private async findProduct(id: string): Promise<Product> {
        let product;
        try {
          product = await this.productModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find product.');
        }
        if (!product) {
          throw new NotFoundException('Could not find product.');
        }
        return product;
      }
    

      async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map(prod => ({
          id: prod.id,
          name: prod.name,
          quantity: prod.quantity,
          price: prod.price,
        }));
      }
    
      async getSingleProduct(productId: string) {
        const product = await this.findProduct(productId);
        return {
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
        };
      }
    
      async updateProduct(
        productId: string,
        name: string,
        quant: number,
        price: number,
      ) {
        const updatedProduct = await this.findProduct(productId);
        if (name) {
          updatedProduct.name = name;
        }
        if (quant) {
          updatedProduct.quantity = quant;
        }
        if (price) {
          updatedProduct.price = price;
        }
        updatedProduct.save();
      }
    
      async deleteProduct(prodId: string) {
        const result = await this.productModel.deleteOne({_id: prodId}).exec();
        if (result.deletedCount === 0) {
          throw new NotFoundException('Could not find product.');
        }
      }

}
