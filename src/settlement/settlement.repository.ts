import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { Prisma } from 'generated/prisma/client';
import { DepositRefund, RecordSettlementInput } from 'src/types/settlement';

const WITH_DEDUCTIONS = { deductions: true } as const;

// Reads, plus the one write. The write itself still happens inside
// SettlementService's own $transaction (it needs the deposit-held
// guardrail re-checked in the same transaction as the insert), exactly
// the same division of labour as TenancyRepository/TenancyService.
@Injectable()
export class SettlementRepository {
  private logger = new Logger(SettlementRepository.name);
  constructor(private readonly prismaService: PrismaService) {}

  async findByTenancy(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<DepositRefund | null> {
    return client.depositRefund.findUnique({
      where: { tenancyId },
      include: WITH_DEDUCTIONS,
    });
  }

  async create(
    tenancyId: string,
    depositHeld: number,
    input: RecordSettlementInput,
    client: Prisma.TransactionClient,
  ): Promise<DepositRefund> {
    this.logger.log(`Recording deposit settlement for tenancy ${tenancyId}: refund ${input.refundAmount}`);
    return client.depositRefund.create({
      data: {
        tenancyId,
        depositHeld,
        refundAmount: input.refundAmount,
        refundDate: input.refundDate,
        method: input.method,
        notes: input.notes,
        deductions: input.deductions?.length
          ? { create: input.deductions.map((d) => ({ reason: d.reason, amount: d.amount })) }
          : undefined,
      },
      include: WITH_DEDUCTIONS,
    });
  }
}
