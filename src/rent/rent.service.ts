import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prismaservice/prismaservice.service';

// 3.1 — rent is pre-paid: the tenant is expected to have paid before (or
// right at the start of) the month it covers. So this job runs ahead of
// time, not on the day rent is due.
@Injectable()
export class RentService {
  private readonly logger = new Logger(RentService.name);

  constructor(private readonly prismaService: PrismaService) {}

  // Runs every midnight in production (RENT_CRON_SCHEDULE="0 0 * * *"), or
  // every 5 seconds in dev/test (the default in .env) so the same code
  // path can be watched run repeatedly without waiting for a real month
  // boundary. Either way it calls the exact same generateRentForMonth()
  // below — there's no separate "test version" of the logic.
  @Cron(process.env.RENT_CRON_SCHEDULE || CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleNightlyRentGeneration(): Promise<void> {
    const leadDays = Number(process.env.RENT_GENERATION_LEAD_DAYS ?? 5);
    const today = new Date();

    // Always ensure THIS month is covered — catches a tenant who moved in
    // after this month's normal generation window already passed.
    await this.generateRentForMonth(today);

    // Only reach ahead to NEXT month once we're within the lead window —
    // this is what makes rent "pre-paid": tenants see next month's charge
    // before the month actually starts.
    if (this.isWithinLeadWindow(today, leadDays)) {
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      await this.generateRentForMonth(nextMonth);
    }
  }

  // Idempotent and safe to call for any month, any number of times —
  // whoever calls it (the cron above, or the manual endpoint) doesn't
  // need to know or care whether it already ran. Scenario: the cron
  // fires nightly from Sept 26 through Sept 30 (5-day lead window) — the
  // first run creates October's charges, the next four find them already
  // there and skip, with nothing doubled and no error surfaced.
  //
  // Written as ONE bulk insert rather than a per-tenancy loop. With 40
  // tenancies (or 400), a loop means 40 sequential round trips to the
  // database — each one waiting on the last to finish before starting.
  // `createMany` does the whole batch in a single round trip, and
  // `skipDuplicates` leans on the existing @@unique([tenancyId, type,
  // periodMonth]) constraint to silently skip whichever tenancies already
  // have this month's rent — no per-row try/catch needed.
  async generateRentForMonth(
    targetMonth: Date,
    createdById?: string,
  ): Promise<{ generated: number; skipped: number }> {
    const periodMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), 1);
    const periodLabel = periodMonth.toISOString().slice(0, 7);

    const activeTenancies = await this.prismaService.tenancy.findMany({
      where: { status: 'ACTIVE' },
      include: { house: { include: { property: true } } },
    });

    const { count: generated } = await this.prismaService.charge.createMany({
      data: activeTenancies.map((tenancy) => ({
        tenancyId: tenancy.id,
        type: 'RENT' as const,
        periodMonth,
        amount: tenancy.monthlyRent,
        description: `Rent for ${periodLabel}`,
        // A human-triggered catch-up run (the manual endpoint) attributes
        // every charge to whoever clicked the button. The nightly cron
        // has no human behind it, so each charge is attributed to that
        // tenancy's own property owner instead — never a fabricated
        // "system" user that isn't a real, auditable account.
        createdById: createdById ?? tenancy.house.property.ownerId,
      })),
      skipDuplicates: true,
    });

    const skipped = activeTenancies.length - generated;
    this.logger.log(`Rent generation for ${periodLabel}: ${generated} generated, ${skipped} already existed`);
    return { generated, skipped };
  }

  private isWithinLeadWindow(today: Date, leadDays: number): boolean {
    const endOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysRemaining = endOfThisMonth.getDate() - today.getDate();
    return daysRemaining <= leadDays;
  }
}
