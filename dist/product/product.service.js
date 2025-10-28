"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../entities/product.entity");
const product_image_entity_1 = require("../entities/product-image.entity");
let ProductService = class ProductService {
    productRepository;
    productImageRepository;
    constructor(productRepository, productImageRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
    }
    async create(createProductDto) {
        const product = this.productRepository.create(createProductDto);
        return await this.productRepository.save(product);
    }
    async findAll() {
        return await this.productRepository.find({
            relations: ['kategori', 'images'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['kategori', 'images'],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Ürün ID ${id} bulunamadı`);
        }
        return product;
    }
    async findByCategory(categoryId) {
        return await this.productRepository.find({
            where: { kategoriId: categoryId },
            relations: ['kategori', 'images'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByStockCode(stokKodu) {
        const product = await this.productRepository.findOne({
            where: { stokKodu },
            relations: ['kategori', 'images'],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Stok kodu ${stokKodu} bulunamadı`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        const product = await this.findOne(id);
        Object.assign(product, updateProductDto);
        return await this.productRepository.save(product);
    }
    async remove(id) {
        const product = await this.findOne(id);
        await this.productRepository.remove(product);
    }
    async addImages(id, imagePaths, isMain = false) {
        const product = await this.findOne(id);
        if (isMain) {
            await this.productImageRepository.update({ productId: id }, { isMain: false });
        }
        const images = imagePaths.map((path, index) => {
            const image = new product_image_entity_1.ProductImage();
            image.productId = id;
            image.imagePath = path;
            image.sira = product.images ? product.images.length + index : index;
            image.isMain = isMain && index === 0;
            return image;
        });
        await this.productImageRepository.save(images);
        return await this.findOne(id);
    }
    async removeImage(id, imageId) {
        const image = await this.productImageRepository.findOne({
            where: { id: imageId, productId: id },
        });
        if (!image) {
            throw new common_1.NotFoundException(`Görsel bulunamadı`);
        }
        await this.productImageRepository.remove(image);
        return await this.findOne(id);
    }
    async setMainImage(productId, imageId) {
        await this.productImageRepository.update({ productId }, { isMain: false });
        const image = await this.productImageRepository.findOne({
            where: { id: imageId, productId },
        });
        if (!image) {
            throw new common_1.NotFoundException(`Görsel bulunamadı`);
        }
        image.isMain = true;
        await this.productImageRepository.save(image);
        return await this.findOne(productId);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(product_image_entity_1.ProductImage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map