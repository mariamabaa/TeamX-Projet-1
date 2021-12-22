import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodName: string, prodQuant: number, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        name: string;
        quantity: number;
        price: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        name: string;
        quantity: number;
        price: number;
    }>;
    updateProduct(prodId: string, prodName: string, prodQuant: number, prodPrice: number): Promise<any>;
    removeProduct(prodId: string): Promise<any>;
}
