import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ChargeRepository } from './charge.repository';
import { Charge, CreateChargeInput } from 'src/types/charge';
import { ChargeType, Prisma } from 'generated/prisma/client';

@Injectable()
export class ChargeService {
  constructor(private readonly chargeRepository: ChargeRepository) {}

  async createCharge(input: CreateChargeInput, createdById: string): Promise<Charge> {
    try {
      return await this.chargeRepository.create(input, createdById);
    } catch (error) {
      // A recurring charge (RENT/WATER/...) already exists for this
      // tenancy+type+month — the unique constraint on Charge catches it.
      // Scenario: the rent job runs twice for September by accident (or
      // the owner manually tries to re-enter a water bill she already
      // recorded) — this turns that into a clear 409, not silent
      // duplication of what's owed.
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException(
          `A ${input.type} charge already exists for this tenancy${input.periodMonth ? ' for this period' : ''}`,
        );
      }
      throw error;
    }
  }

  async getChargeById(id: string): Promise<Charge> {
    const charge = await this.chargeRepository.findById(id);
    if (!charge) {
      throw new NotFoundException(`Charge ${id} not found`);
    }
    return charge;
  }

  async getChargesByTenancy(tenancyId: string, type?: ChargeType): Promise<Charge[]> {
    return this.chargeRepository.findByTenancy(tenancyId, type);
  }

  async voidCharge(id: string, reason: string, voidedById: string): Promise<Charge> {
    const charge = await this.getChargeById(id);
    if (charge.voidedAt) {
      throw new ConflictException('Charge is already voided');
    }
    return this.chargeRepository.voidCharge(id, reason, voidedById);
  }
}
