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
var HouseRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseRepository = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
let HouseRepository = HouseRepository_1 = class HouseRepository {
    prismaService;
    logger = new common_1.Logger(HouseRepository_1.name);
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(input) {
        this.logger.log(`Creating house ${input.unitNumber} for property ${input.propertyId}`);
        return this.prismaService.house.create({ data: input });
    }
    async findById(id) {
        this.logger.log(`Finding house with ID: ${id}`);
        return this.prismaService.house.findUnique({ where: { id },
            include: {
                tenancies: {
                    select: {
                        id: true,
                        tenant: {
                            select: {
                                fullName: true,
                                phone: true
                            }
                        },
                    }
                },
                property: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }
    async findHousesByPropertyId(id) {
        this.logger.log("Get houses for a property");
        return this.prismaService.house.findMany({
            where: {
                propertyId: id,
            },
            include: {
                tenancies: {
                    select: {
                        id: true,
                        tenant: {
                            select: {
                                fullName: true,
                                phone: true
                            }
                        },
                    }
                },
                property: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }
    async findAll(filter = {}) {
        this.logger.log(`Finding houses with filter: ${JSON.stringify(filter)}`);
        return this.prismaService.house.findMany({
            where: filter,
            orderBy: { unitNumber: 'asc' },
            include: {
                tenancies: {
                    select: {
                        id: true,
                        tenant: {
                            select: {
                                fullName: true,
                                phone: true
                            }
                        },
                    }
                },
                property: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }
    async update(id, input) {
        this.logger.log(`Updating house with ID: ${id}`);
        return this.prismaService.house.update({ where: { id }, data: input });
    }
    async updateStatus(id, status, notes) {
        this.logger.log(`Updating house ${id} status to ${status}`);
        return this.prismaService.house.update({
            where: { id },
            data: { status, ...(notes !== undefined ? { notes } : {}) },
        });
    }
    async delete(id) {
        this.logger.log(`Deleting house with ID: ${id}`);
        return this.prismaService.house.delete({ where: { id } });
    }
};
exports.HouseRepository = HouseRepository;
exports.HouseRepository = HouseRepository = HouseRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], HouseRepository);
//# sourceMappingURL=house.repository.js.map