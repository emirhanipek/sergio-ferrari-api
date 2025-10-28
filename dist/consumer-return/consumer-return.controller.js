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
exports.ConsumerReturnController = void 0;
const common_1 = require("@nestjs/common");
const consumer_return_service_1 = require("./consumer-return.service");
const create_consumer_return_dto_1 = require("./dto/create-consumer-return.dto");
const update_consumer_return_dto_1 = require("./dto/update-consumer-return.dto");
let ConsumerReturnController = class ConsumerReturnController {
    consumerReturnService;
    constructor(consumerReturnService) {
        this.consumerReturnService = consumerReturnService;
    }
    create(createConsumerReturnDto) {
        return this.consumerReturnService.create(createConsumerReturnDto);
    }
    findAll(durum) {
        if (durum) {
            return this.consumerReturnService.findByStatus(durum);
        }
        return this.consumerReturnService.findAll();
    }
    findOne(id) {
        return this.consumerReturnService.findOne(+id);
    }
    update(id, updateConsumerReturnDto) {
        return this.consumerReturnService.update(+id, updateConsumerReturnDto);
    }
    updateStatus(id, durum) {
        return this.consumerReturnService.updateStatus(+id, durum);
    }
    remove(id) {
        return this.consumerReturnService.remove(+id);
    }
};
exports.ConsumerReturnController = ConsumerReturnController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consumer_return_dto_1.CreateConsumerReturnDto]),
    __metadata("design:returntype", void 0)
], ConsumerReturnController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('durum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsumerReturnController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsumerReturnController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_consumer_return_dto_1.UpdateConsumerReturnDto]),
    __metadata("design:returntype", void 0)
], ConsumerReturnController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('durum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ConsumerReturnController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsumerReturnController.prototype, "remove", null);
exports.ConsumerReturnController = ConsumerReturnController = __decorate([
    (0, common_1.Controller)('consumer-returns'),
    __metadata("design:paramtypes", [consumer_return_service_1.ConsumerReturnService])
], ConsumerReturnController);
//# sourceMappingURL=consumer-return.controller.js.map