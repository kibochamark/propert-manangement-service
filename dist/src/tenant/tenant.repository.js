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
var TenantRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRepository = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
let TenantRepository = TenantRepository_1 = class TenantRepository {
    prismaService;
    logger = new common_1.Logger(TenantRepository_1.name);
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(input) {
        this.logger.log(`Creating tenant: ${input.fullName}`);
        return this.prismaService.tenant.create({ data: input });
    }
    async findById(id) {
        this.logger.log(`Finding tenant with ID: ${id}`);
        return this.prismaService.tenant.findUnique({ where: { id } });
    }
    async findAll() {
        this.logger.log('Finding all tenants');
        return this.prismaService.tenant.findMany({ orderBy: { fullName: 'asc' } });
    }
    async update(id, input) {
        this.logger.log(`Updating tenant with ID: ${id}`);
        return this.prismaService.tenant.update({ where: { id }, data: input });
    }
    async delete(id) {
        this.logger.log(`Deleting tenant with ID: ${id}`);
        return this.prismaService.tenant.delete({ where: { id } });
    }
};
exports.TenantRepository = TenantRepository;
exports.TenantRepository = TenantRepository = TenantRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], TenantRepository);
//# sourceMappingURL=tenant.repository.js.map