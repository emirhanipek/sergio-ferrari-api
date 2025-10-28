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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerReturn = void 0;
const typeorm_1 = require("typeorm");
let ConsumerReturn = class ConsumerReturn {
    id;
    ad;
    soyad;
    eposta;
    telefon;
    konu;
    mesaj;
    durum;
    createdAt;
    updatedAt;
};
exports.ConsumerReturn = ConsumerReturn;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConsumerReturn.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "ad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "soyad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "eposta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "telefon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "konu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "mesaj", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['bekliyor', 'okundu', 'cevaplandı'], default: 'bekliyor' }),
    __metadata("design:type", String)
], ConsumerReturn.prototype, "durum", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ConsumerReturn.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ConsumerReturn.prototype, "updatedAt", void 0);
exports.ConsumerReturn = ConsumerReturn = __decorate([
    (0, typeorm_1.Entity)('consumer_returns')
], ConsumerReturn);
//# sourceMappingURL=consumer-return.entity.js.map