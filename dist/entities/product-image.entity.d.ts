import { Product } from './product.entity';
export declare class ProductImage {
    id: number;
    productId: number;
    product: Product;
    imagePath: string;
    sira: number;
    isMain: boolean;
    createdAt: Date;
}
