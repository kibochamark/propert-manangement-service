import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { TenancyRepository } from './tenancy.repository';
import { OCCUPYING_STATUSES, MoveInInput, Tenancy, RecordNoticeInput, VacateInput, VacateResult } from 'src/types/tenancy';
import { HouseService } from 'src/house/house.service';
import { SettlementService } from 'src/settlement/settlement.service';
import { toUtcDateOnly } from 'src/common/date.util';

@Injectable()
export class TenancyService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tenancyRepository: TenancyRepository,
    private readonly houseService: HouseService,
    private readonly settlementService: SettlementService,
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
      const house = await tx.house.findUnique({
        where: { id: input.houseId },
        include: { property: true }, // 5.1 — for defaultNoticePeriodDays
      });
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
      //
      // 5.1 — "already has a tenant" now means ACTIVE *or* NOTICE_GIVEN: a
      // tenant who has given notice hasn't left yet, so the house isn't
      // free for a second move-in until vacate actually happens.
      const existingActive = await tx.tenancy.findFirst({
        where: { houseId: input.houseId, status: { in: OCCUPYING_STATUSES } },
      });
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
        where: { tenantId: input.tenantId, status: { in: OCCUPYING_STATUSES } },
      });
      if (tenantAlreadyActive) {
        throw new ConflictException('This tenant already has an active tenancy elsewhere');
      }

      // 5.1 — frozen here and never re-read, exactly like monthlyRent and
      // depositRequired. If the owner changes the property default next
      // year, this tenant is still judged against what they actually
      // agreed to.
      const noticePeriodDays = input.noticePeriodDays ?? house.property.defaultNoticePeriodDays;

      const tenancy = await tx.tenancy.create({
        data: {
          houseId: input.houseId,
          tenantId: input.tenantId,
          monthlyRent: input.monthlyRent,
          depositRequired,
          noticePeriodDays,
          startDate: input.startDate,
          expectedEndDate: input.expectedEndDate,
          openingWaterReading: input.openingWaterReading,
          notes: input.notes,
        },
        include: { tenant: true },
      });

      // A tenant returning after an earlier tenancy elsewhere would still
      // read FORMER otherwise — only one non-vacated tenancy is ever
      // allowed per tenant (the guard above), so this is unambiguous.
      await tx.tenant.update({ where: { id: input.tenantId }, data: { status: 'ACTIVE' } });

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

  // 5.1 — "so I know which houses are about to free up." One action, one
  // transaction across Tenancy and House: a notice recorded against a
  // house that still advertises OCCUPIED is a house the owner won't think
  // to re-let. Same reasoning as moveIn above — see that comment for why
  // this talks to `tx` directly instead of going through the repositories.
  //
  // Notice is OPTIONAL — a tenant can simply vacate() with none ever
  // recorded (an emergency move-out). This endpoint exists for the normal
  // case, and can also be called again on a tenancy already NOTICE_GIVEN
  // to correct a mistyped date, since there's no column tracking who gave
  // notice beyond what's folded into the house's note below.
  async recordNotice(tenancyId: string, input: RecordNoticeInput, actedById: string): Promise<Tenancy> {
    return this.prismaService.$transaction(async (tx) => {
      const tenancy = await tx.tenancy.findUnique({
        where: { id: tenancyId },
        include: { tenant: true },
      });
      if (!tenancy) {
        throw new NotFoundException(`Tenancy ${tenancyId} not found`);
      }
      if (tenancy.status === 'VACATED') {
        throw new ConflictException('This tenancy has already ended');
      }

      const noticeDate = toUtcDateOnly(input.noticeDate);
      const expectedEndDate = toUtcDateOnly(input.expectedEndDate);

      const updated = await tx.tenancy.update({
        where: { id: tenancyId },
        data: {
          status: 'NOTICE_GIVEN',
          noticeDate,
          expectedEndDate,
          ...(input.reason !== undefined ? { moveOutReason: input.reason } : {}),
        },
        include: { tenant: true },
      });

      await this.houseService.changeStatus(
        tenancy.houseId,
        'NOTICE_GIVEN',
        `Notice given by ${tenancy.tenant.fullName}, expected out ${expectedEndDate.toISOString().slice(0, 10)}` +
          `${input.reason ? ` — ${input.reason}` : ''} (recorded by ${actedById})`,
        tx,
      );

      return updated;
    });
  }

  // 5.2 — the mirror image of moveIn. Three tables, all-or-nothing: the
  // tenancy ends, the house frees up, the tenant becomes a former tenant.
  // A half-commit here is the worst state the system can be in — a house
  // reading VACANT while its tenancy still reads ACTIVE would sail
  // straight past moveIn's 2.5 guard and let a second tenant be moved in.
  //
  // Notice is NOT required to get here. A tenant can leave in an emergency
  // with none given at all; the ABSENCE of notice is itself recorded
  // data, surfaced as noticeCompliance: NO_NOTICE in the settlement
  // preview — never blocked here.
  async vacate(tenancyId: string, input: VacateInput, actedById: string): Promise<VacateResult> {
    return this.prismaService.$transaction(
      async (tx) => {
        const tenancy = await tx.tenancy.findUnique({
          where: { id: tenancyId },
          include: { tenant: true },
        });
        if (!tenancy) {
          throw new NotFoundException(`Tenancy ${tenancyId} not found`);
        }
        if (tenancy.status === 'VACATED') {
          throw new ConflictException('This tenancy has already ended');
        }

        const actualEndDate = toUtcDateOnly(input.actualEndDate);

        const updatedTenancy = await tx.tenancy.update({
          where: { id: tenancyId },
          data: {
            status: 'VACATED',
            actualEndDate,
            // Conditional: notice may already have recorded a reason, and
            // an omitted field here must not blank it out.
            ...(input.moveOutReason !== undefined ? { moveOutReason: input.moveOutReason } : {}),
          },
          include: { tenant: true },
        });

        // README 5.2 — "tenant becomes a former tenant."
        await tx.tenant.update({ where: { id: tenancy.tenantId }, data: { status: 'FORMER' } });

        const nextHouseStatus = input.houseStatusAfter ?? 'VACANT';
        await this.houseService.changeStatus(
          tenancy.houseId,
          nextHouseStatus,
          input.houseStatusReason ??
            `${tenancy.tenant.fullName} moved out on ${actualEndDate.toISOString().slice(0, 10)} (recorded by ${actedById})`,
          tx,
        );

        // 5.2 — a tenant who prepaid and left owes nothing further, but any
        // leftover credit sitting unallocated (the schema's own promise
        // that this "quietly catches up" on the next new charge — one that
        // will never come now this tenancy is VACATED) must be applied
        // here, or it's lost from view for good.
        await this.settlementService.applyLeftoverCredit(tenancyId, tx);

        const settlementPreview = await this.settlementService.buildPreview(tenancyId, tx);

        return { tenancy: updatedTenancy, settlementPreview };
      },
      // Longer than moveIn's default: this transaction does strictly more
      // sequential work (tenancy + tenant + house updates, leftover-credit
      // allocation, then a full settlement preview build on top), so it
      // needs more headroom under real network latency to the database.
      { timeout: 15_000 },
    );
  }
}
