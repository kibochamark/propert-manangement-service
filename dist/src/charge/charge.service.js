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
exports.ChargeService = void 0;
const common_1 = require("@nestjs/common");
const charge_repository_1 = require("./charge.repository");
const client_1 = require("../../generated/prisma/client");
let ChargeService = class ChargeService {
    chargeRepository;
    constructor(chargeRepository) {
        this.chargeRepository = chargeRepository;
    }
    async createCharge(input, createdById) {
        try {
            return await this.chargeRepository.create(input, createdById);
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException(`A ${input.type} charge already exists for this tenancy${input.periodMonth ? ' for this period' : ''}`);
            }
            throw error;
        }
    }
    async getChargeById(id) {
        const charge = await this.chargeRepository.findById(id);
        if (!charge) {
            throw new common_1.NotFoundException(`Charge ${id} not found`);
        }
        return charge;
    }
    async getChargesByTenancy(tenancyId, type) {
        return this.chargeRepository.findByTenancy(tenancyId, type);
    }
    async voidCharge(id, reason, voidedById) {
        const charge = await this.getChargeById(id);
        if (charge.voidedAt) {
            throw new common_1.ConflictException('Charge is already voided');
        }
        return this.chargeRepository.voidCharge(id, reason, voidedById);
    }
};
exports.ChargeService = ChargeService;
exports.ChargeService = ChargeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [charge_repository_1.ChargeRepository])
], ChargeService);
//# sourceMappingURL=charge.service.js.map