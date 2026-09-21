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
var BalanceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceService = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
const decimal_util_1 = require("../common/decimal.util");
let BalanceService = class BalanceService {
    static { BalanceService_1 = this; }
    prismaService;
    static PRIORITY = {
        RENTDEPOSIT: 0,
        WATERDEPOSIT: 0,
        TRASHDEPOSIT: 0,
        SECURITYDEPOSIT: 0,
        RENT: 1,
        WATER: 2,
        TRASH: 3,
        SECURITY: 3,
        SERVICEFEE: 3,
        OTHER: 3,
    };
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOutstandingCharges(tenancyId, client = this.prismaService) {
        const charges = await client.charge.findMany({
            where: { tenancyId, voidedAt: null },
            include: {
                allocations: { where: { payment: { voidedAt: null } } },
            },
        });
        return charges
            .map((charge) => ({
            chargeId: charge.id,
            type: charge.type,
            periodMonth: charge.periodMonth,
            dueDate: charge.dueDate,
            createdAt: charge.createdAt,
            outstanding: (0, decimal_util_1.toNumber)(charge.amount) - charge.allocations.reduce((sum, a) => sum + (0, decimal_util_1.toNumber)(a.amount), 0),
        }))
            .filter((charge) => charge.outstanding > 0)
            .sort((a, b) => {
            const tierDiff = BalanceService_1.PRIORITY[a.type] - BalanceService_1.PRIORITY[b.type];
            if (tierDiff !== 0)
                return tierDiff;
            const aDate = a.periodMonth ?? a.dueDate ?? a.createdAt;
            const bDate = b.periodMonth ?? b.dueDate ?? b.createdAt;
            return aDate.getTime() - bDate.getTime();
        });
    }
    async getTenancyBalance(tenancyId, client = this.prismaService) {
        const outstanding = await this.getOutstandingCharges(tenancyId, client);
        const byType = {};
        let total = 0;
        for (const charge of outstanding) {
            byType[charge.type] = (byType[charge.type] ?? 0) + charge.outstanding;
            total += charge.outstanding;
        }
        return { tenancyId, byType, total, isCleared: total === 0 };
    }
};
exports.BalanceService = BalanceService;
exports.BalanceService = BalanceService = BalanceService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], BalanceService);
//# sourceMappingURL=balance.service.js.map