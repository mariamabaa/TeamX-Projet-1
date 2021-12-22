import { Model } from 'mongoose';
import { Product } from './product.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    insertProduct(name: string, quant: number, price: number): Promise<string>;
    private findProduct;
    getProducts(): Promise<{
        id: string;
        name: string;
        quantity: number;
        price: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        name: string;
        quantity: number;
        price: number;
    }>;
    updateProduct(productId: string, name: string, quant: number, price: number): Promise<void>;
    deleteProduct(prodId: string): Promise<void>;
}
