// Re-export Prisma's own generated types for reads.
export type { Tenancy } from '../../generated/prisma/client';
export { TenancyStatus } from '../../generated/prisma/enums';

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
  startDate: Date;
  expectedEndDate?: Date;
  openingWaterReading?: number;
  notes?: string;
}
