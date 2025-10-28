import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("../entities/product.entity").Product>;
    findAll(): Promise<import("../entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("../entities/product.entity").Product>;
    findByCategory(categoryId: string): Promise<import("../entities/product.entity").Product[]>;
    findByStockCode(stokKodu: string): Promise<import("../entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("../entities/product.entity").Product>;
    remove(id: string): Promise<void>;
    uploadImages(id: string, files: Array<Express.Multer.File>, isMain?: string): Promise<import("../entities/product.entity").Product>;
    removeImage(id: string, imageId: string): Promise<import("../entities/product.entity").Product>;
    setMainImage(id: string, imageId: string): Promise<import("../entities/product.entity").Product>;
}
