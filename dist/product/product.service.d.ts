import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ProductImage } from '../entities/product-image.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private productRepository;
    private productImageRepository;
    constructor(productRepository: Repository<Product>, productImageRepository: Repository<ProductImage>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    findByCategory(categoryId: number): Promise<Product[]>;
    findByStockCode(stokKodu: string): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
    addImages(id: number, imagePaths: string[], isMain?: boolean): Promise<Product>;
    removeImage(id: number, imageId: number): Promise<Product>;
    setMainImage(productId: number, imageId: number): Promise<Product>;
}
