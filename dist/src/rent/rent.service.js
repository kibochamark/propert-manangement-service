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
var RentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
let RentService = RentService_1 = class RentService {
    prismaService;
    logger = new common_1.Logger(RentService_1.name);
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async handleNightlyRentGeneration() {
        const leadDays = Number(process.env.RENT_GENERATION_LEAD_DAYS ?? 5);
        const today = new Date();
        await this.generateRentForMonth(today);
        if (this.isWithinLeadWindow(today, leadDays)) {
            const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
            await this.generateRentForMonth(nextMonth);
        }
    }
    async generateRentForMonth(targetMonth, createdById) {
        const periodMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), 1);
        const periodLabel = periodMonth.toISOString().slice(0, 7);
        const activeTenancies = await this.prismaService.tenancy.findMany({
            where: { status: 'ACTIVE' },
            include: { house: { include: { property: true } } },
        });
        const { count: generated } = await this.prismaService.charge.createMany({
            data: activeTenancies.map((tenancy) => ({
                tenancyId: tenancy.id,
                type: 'RENT',
                periodMonth,
                amount: tenancy.monthlyRent,
                description: `Rent for ${periodLabel}`,
                createdById: createdById ?? tenancy.house.property.ownerId,
            })),
            skipDuplicates: true,
        });
        const skipped = activeTenancies.length - generated;
        this.logger.log(`Rent generation for ${periodLabel}: ${generated} generated, ${skipped} already existed`);
        return { generated, skipped };
    }
    isWithinLeadWindow(today, leadDays) {
        const endOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const daysRemaining = endOfThisMonth.getDate() - today.getDate();
        return daysRemaining <= leadDays;
    }
};
exports.RentService = RentService;
__decorate([
    (0, schedule_1.Cron)(process.env.RENT_CRON_SCHEDULE || schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RentService.prototype, "handleNightlyRentGeneration", null);
exports.RentService = RentService = RentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], RentService);
//# sourceMappingURL=rent.service.js.map