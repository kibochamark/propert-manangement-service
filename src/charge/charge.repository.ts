import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { Charge, CreateChargeInput } from 'src/types/charge';
import { ChargeType } from 'generated/prisma/enums';

@Injectable()
export class ChargeRepository {
  private logger = new Logger(ChargeRepository.name);
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateChargeInput, createdById: string): Promise<Charge> {
    this.logger.log(`Creating ${input.type} charge of ${input.amount} for tenancy ${input.tenancyId}`);
    return this.prismaService.charge.create({
      data: { ...input, createdById },
    });
  }

  async findById(id: string): Promise<Charge | null> {
    return this.prismaService.charge.findUnique({ where: { id } });
  }

  async findByTenancy(tenancyId: string, type?: ChargeType): Promise<Charge[]> {
    return this.prismaService.charge.findMany({
      where: { tenancyId, type },
      orderBy: [{ periodMonth: 'asc' }, { createdAt: 'asc' }],
    });
  }

  async voidCharge(id: string, reason: string, voidedById: string): Promise<Charge> {
    return this.prismaService.charge.update({
      where: { id },
      data: { voidedAt: new Date(), voidReason: reason, voidedById },
    });
  }
}
