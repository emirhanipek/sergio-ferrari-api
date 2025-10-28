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
exports.ConsumerReturnService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consumer_return_entity_1 = require("../entities/consumer-return.entity");
let ConsumerReturnService = class ConsumerReturnService {
    consumerReturnRepository;
    constructor(consumerReturnRepository) {
        this.consumerReturnRepository = consumerReturnRepository;
    }
    async create(createConsumerReturnDto) {
        const consumerReturn = this.consumerReturnRepository.create(createConsumerReturnDto);
        return await this.consumerReturnRepository.save(consumerReturn);
    }
    async findAll() {
        return await this.consumerReturnRepository.find({
            order: { createdAt: 'DESC' },
        });
    }
    async findByStatus(durum) {
        return await this.consumerReturnRepository.find({
            where: { durum },
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const consumerReturn = await this.consumerReturnRepository.findOne({
            where: { id },
        });
        if (!consumerReturn) {
            throw new common_1.NotFoundException(`İade talebi ID ${id} bulunamadı`);
        }
        return consumerReturn;
    }
    async update(id, updateConsumerReturnDto) {
        const consumerReturn = await this.findOne(id);
        Object.assign(consumerReturn, updateConsumerReturnDto);
        return await this.consumerReturnRepository.save(consumerReturn);
    }
    async updateStatus(id, durum) {
        const consumerReturn = await this.findOne(id);
        consumerReturn.durum = durum;
        return await this.consumerReturnRepository.save(consumerReturn);
    }
    async remove(id) {
        const consumerReturn = await this.findOne(id);
        await this.consumerReturnRepository.remove(consumerReturn);
    }
};
exports.ConsumerReturnService = ConsumerReturnService;
exports.ConsumerReturnService = ConsumerReturnService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consumer_return_entity_1.ConsumerReturn)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsumerReturnService);
//# sourceMappingURL=consumer-return.service.js.map