import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { Payment } from 'src/types/payment';

const WITH_ALLOCATIONS = { allocations: { include: { charge: true } } } as const;

@Injectable()
export class PaymentRepository {
  private logger = new Logger(PaymentRepository.name);
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: string): Promise<Payment | null> {
    return this.prismaService.payment.findUnique({ where: { id }, include: WITH_ALLOCATIONS });
  }

  async findByTenancy(tenancyId: string): Promise<Payment[]> {
    return this.prismaService.payment.findMany({
      where: { tenancyId },
      include: WITH_ALLOCATIONS,
      orderBy: { paidAt: 'desc' },
    });
  }

  // 3.5 — the live (non-voided) payment already using this reference, if
  // any. A voided payment's reference is fair game to reuse: it never
  // actually happened.
  async findActiveByReference(reference: string): Promise<Payment | null> {
    return this.prismaService.payment.findFirst({
      where: { reference, voidedAt: null },
    });
  }

  async voidPayment(id: string, reason: string, voidedById: string): Promise<Payment> {
    this.logger.log(`Voiding payment ${id}: ${reason}`);
    return this.prismaService.payment.update({
      where: { id },
      data: { voidedAt: new Date(), voidReason: reason, voidedById },
      include: WITH_ALLOCATIONS,
    });
  }
}
