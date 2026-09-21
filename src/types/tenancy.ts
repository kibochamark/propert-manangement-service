import { CreateTenantInput } from './tenant';

// Re-export Prisma's own generated types for reads.
export type { Tenancy } from '../../generated/prisma/client';
export { TenancyStatus } from '../../generated/prisma/enums';

// 2.2 — everything one move-in needs in a single payload. Either
// `tenantId` (an existing/returning tenant) or `tenant` (create one on
// the spot) must be given — never both, never neither.
export interface MoveInInput {
  houseId: string;
  tenantId?: string;
  tenant?: CreateTenantInput;
  monthlyRent: number; // the agreed rent — frozen onto the tenancy, see tenancy.service.ts
  depositRequired?: number; // 2.3 — left out, defaults to monthlyRent
  startDate: Date;
  expectedEndDate?: Date;
  openingWaterReading?: number;
  notes?: string;
}
