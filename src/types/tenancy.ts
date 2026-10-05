// Re-export Prisma's own generated types for reads.
export type { Tenancy } from '../../generated/prisma/client';
export { TenancyStatus } from '../../generated/prisma/enums';
import { TenancyStatus, HouseStatus } from '../../generated/prisma/enums';
import type { Tenancy as TenancyRecord } from '../../generated/prisma/client';
import type { SettlementPreview } from './settlement';

// 5.1 — "still living here" is now TWO statuses, not one. A tenant who has
// given notice has not left: they still owe rent, still block a second
// move-in, and are still the active tenant of their house. Every query that
// used to mean ACTIVE must mean this instead, or a tenant on notice quietly
// stops being charged rent and their house looks free to re-let.
export const OCCUPYING_STATUSES: TenancyStatus[] = ['ACTIVE', 'NOTICE_GIVEN'];

// 2.2 — everything one move-in needs, linked to an EXISTING tenant by id.
// The tenant is created separately, via the Tenant module (2.1), before
// this is ever called — move-in's only job is to link a tenant to a
// house and start their tenancy, not to also be a second way to create
// a tenant.
export interface MoveInInput {
  houseId: string;
  tenantId: string;
  monthlyRent: number; // the agreed rent — frozen onto the tenancy, see tenancy.service.ts
  depositRequired?: number; // 2.3 — left out, defaults to monthlyRent
  // 5.1 — left out, defaults to the house's property's defaultNoticePeriodDays.
  // Frozen onto the tenancy at move-in, same as monthlyRent/depositRequired.
  noticePeriodDays?: number;
  startDate: Date;
  expectedEndDate?: Date;
  openingWaterReading?: number;
  notes?: string;
}

// 5.1 — "I'm leaving, and here's when." Optional step: an emergency
// move-out can skip straight to vacate() with none of this ever recorded.
export interface RecordNoticeInput {
  noticeDate: Date; // when notice was actually GIVEN — drives compliance
  expectedEndDate: Date; // when the tenant says they'll be out
  reason?: string;
}

// 5.2 — the mirror image of MoveInInput.
export interface VacateInput {
  actualEndDate: Date;
  moveOutReason?: string;
  // Defaults to VACANT. An owner who knows the unit needs work before the
  // next tenant can send it straight to MAINTENANCE/INACTIVE instead.
  houseStatusAfter?: Extract<HouseStatus, 'VACANT' | 'MAINTENANCE' | 'INACTIVE'>;
  houseStatusReason?: string;
}

export interface VacateResult {
  tenancy: TenancyRecord;
  settlementPreview: SettlementPreview;
}
