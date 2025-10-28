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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../entities/category.entity");
let CategoryService = class CategoryService {
    categoryRepository;
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto) {
        const category = this.categoryRepository.create(createCategoryDto);
        return await this.categoryRepository.save(category);
    }
    async findAll() {
        return await this.categoryRepository.find({
            relations: ['ustKategori', 'altKategoriler'],
            order: { sira: 'ASC' },
        });
    }
    async findOne(id) {
        const category = await this.categoryRepository.findOne({
            where: { id },
            relations: ['ustKategori', 'altKategoriler', 'urunler'],
        });
        if (!category) {
            throw new common_1.NotFoundException(`Kategori ID ${id} bulunamadı`);
        }
        return category;
    }
    async findBySlug(slug) {
        const category = await this.categoryRepository.findOne({
            where: { urlSlug: slug },
            relations: ['ustKategori', 'altKategoriler', 'urunler'],
        });
        if (!category) {
            throw new common_1.NotFoundException(`Kategori slug ${slug} bulunamadı`);
        }
        return category;
    }
    async update(id, updateCategoryDto) {
        const category = await this.findOne(id);
        Object.assign(category, updateCategoryDto);
        return await this.categoryRepository.save(category);
    }
    async remove(id) {
        const category = await this.findOne(id);
        await this.categoryRepository.remove(category);
    }
    async updateImage(id, imagePath) {
        const category = await this.findOne(id);
        category.kategoriGorseli = imagePath;
        return await this.categoryRepository.save(category);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
//# sourceMappingURL=category.service.js.map