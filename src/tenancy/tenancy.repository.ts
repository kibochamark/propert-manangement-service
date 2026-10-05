import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { OCCUPYING_STATUSES, Tenancy } from 'src/types/tenancy';

// Included on every read below: the tenant's name/contact alongside each
// tenancy row, since "who was this" is almost always what's wanted next
// to "what did they pay."
const WITH_TENANT = { tenant: true } as const;

// Handles reads only. The move-in write itself is a multi-table
// transaction (Tenancy + Charge + House, all-or-nothing) and lives in
// TenancyService instead — see the comment there for why.
@Injectable()
export class TenancyRepository {
  private logger = new Logger(TenancyRepository.name);
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: string): Promise<Tenancy | null> {
    this.logger.log(`Finding tenancy with ID: ${id}`);
    return this.prismaService.tenancy.findUnique({
      where: { id },
      include: WITH_TENANT,
    });
  }

  // 2.4 — every tenancy this house has ever had, newest first. Each row
  // carries its OWN frozen monthlyRent/depositRequired, so a later change
  // to the house's advertised rent never touches what's shown here.
  async findByHouse(houseId: string): Promise<Tenancy[]> {
    this.logger.log(`Finding tenancy history for house: ${houseId}`);
    return this.prismaService.tenancy.findMany({
      where: { houseId },
      include: WITH_TENANT,
      orderBy: { startDate: 'desc' },
    });
  }

  // 5.1 — "active" here means "still occupying", which now covers a
  // tenant on notice too (they haven't left yet). See OCCUPYING_STATUSES.
  async findActiveByHouse(houseId: string): Promise<Tenancy | null> {
    return this.prismaService.tenancy.findFirst({
      where: { houseId, status: { in: OCCUPYING_STATUSES } },
      include: WITH_TENANT,
    });
  }
}
