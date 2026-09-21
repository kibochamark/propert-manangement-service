import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { TenancyRepository } from './tenancy.repository';
import { MoveInInput, Tenancy } from 'src/types/tenancy';

@Injectable()
export class TenancyService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tenancyRepository: TenancyRepository,
  ) {}

  // 2.2 — one action, one database transaction. The write touches three
  // tables (Tenancy, the deposit Charge, House.status); if any step
  // fails, EVERYTHING in this call rolls back. That's the whole point of
  // the story ("so I never end up with half a record") — without the
  // transaction, a crash between creating the tenancy and flipping the
  // house to OCCUPIED would leave a house that looks vacant but already
  // has a tenant, which is exactly the kind of silent contradiction 2.5
  // exists to prevent.
  //
  // This is why it talks to `this.prismaService` directly with
  // `$transaction`, instead of going through HouseRepository/TenantRepository:
  // every write inside a transaction must share the same transaction
  // client, and those other repositories don't know about this one.
  async moveIn(input: MoveInInput, createdById: string): Promise<Tenancy> {
    const depositRequired = input.depositRequired ?? input.monthlyRent; // 2.3

    return this.prismaService.$transaction(async (tx) => {
      const house = await tx.house.findUnique({ where: { id: input.houseId } });
      if (!house) {
        throw new NotFoundException(`House ${input.houseId} not found`);
      }

      // 2.5 — the hard rule. Scenario: House 05 already has an active
      // tenant, but someone tries to move a second tenant into it (e.g.
      // two staff members race to onboard the same unit). This check
      // catches it and the whole transaction throws before anything is
      // written. It is not yet backed by a database constraint — see the
      // NOTE on the Tenancy model in schema.prisma — so it's a strong
      // guard, not an absolute one, until that partial unique index is
      // added.
      const existingActive = await tx.tenancy.findFirst({
        where: { houseId: input.houseId, status: 'ACTIVE' },
      });
      console.log(existingActive)
      if (existingActive) {
        throw new ConflictException(`House ${input.houseId} already has an active tenant`);
      }

      const tenant = await tx.tenant.findUnique({ where: { id: input.tenantId } });
      if (!tenant) {
        throw new NotFoundException(`Tenant ${input.tenantId} not found`);
      }

      // Same idea, the other direction: a person can't be the active
      // tenant of two houses at once in a one-property system. Scenario:
      // John moved out of H03 last year but his old tenancy was never
      // closed off — this stops him from being "moved in" again to H07
      // while H03 still thinks he's active, which would otherwise make
      // his rent history ambiguous (which house does his payment belong to?).
      const tenantAlreadyActive = await tx.tenancy.findFirst({
        where: { tenantId: input.tenantId, status: 'ACTIVE' },
      });
      if (tenantAlreadyActive) {
        throw new ConflictException('This tenant already has an active tenancy elsewhere');
      }

      const tenancy = await tx.tenancy.create({
        data: {
          houseId: input.houseId,
          tenantId: input.tenantId,
          monthlyRent: input.monthlyRent,
          depositRequired,
          startDate: input.startDate,
          expectedEndDate: input.expectedEndDate,
          openingWaterReading: input.openingWaterReading,
          notes: input.notes,
        },
        include: { tenant: true },
      });

      // 2.3 — the deposit is owed from day one, as its own charge type,
      // never folded into rent. Scenario: rent is 15,000 and the owner
      // agrees on a 10,000 deposit (not the full rent amount) — this
      // charge is created for exactly 10,000, so the tenant's very first
      // statement already shows "Deposit owed: 10,000" even before any
      // payment has been made.
      await tx.charge.create({
        data: {
          tenancyId: tenancy.id,
          type: 'RENTDEPOSIT',
          amount: depositRequired,
          description: 'Security deposit',
          createdById,
        },
      });

      // Scenario: House 05 was VACANT this morning. The moment this
      // transaction commits, it's OCCUPIED — there is no in-between state
      // where the tenancy exists but the house still shows as available.
      await tx.house.update({
        where: { id: input.houseId },
        data: { status: 'OCCUPIED' },
      });

      return tenancy;
    });
  }

  async getTenancyById(id: string): Promise<Tenancy> {
    const tenancy = await this.tenancyRepository.findById(id);
    if (!tenancy) {
      throw new NotFoundException(`Tenancy ${id} not found`);
    }
    return tenancy;
  }

  // 2.4 — scenario: House 05 has had five tenants over three years, and
  // the owner raised the rent twice in that time. Each row here still
  // shows the rent that particular tenant actually agreed to and paid —
  // never the house's current advertised rent — because monthlyRent was
  // frozen onto the Tenancy the moment each of them moved in.
  async getTenancyHistoryForHouse(houseId: string): Promise<Tenancy[]> {
    return this.tenancyRepository.findByHouse(houseId);
  }

  async getActiveTenancyForHouse(houseId: string): Promise<Tenancy | null> {
    return this.tenancyRepository.findActiveByHouse(houseId);
  }
}
