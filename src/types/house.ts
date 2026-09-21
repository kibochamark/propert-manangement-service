// Re-export Prisma's own generated types for reads — always correct as
// the schema evolves, no hand-maintained copy to drift out of sync.
export type { House } from '../../generated/prisma/client';
export { HouseStatus } from '../../generated/prisma/enums';

// What a caller supplies to create a house. `status` is deliberately not
// here — a new house always starts VACANT (the schema default); it only
// ever changes through the dedicated status-change endpoint (1.5), never
// as a side effect of a general edit.
export interface CreateHouseInput {
  propertyId: string;
  unitNumber: string;
  defaultMonthlyRent: number;
  houseType?: string;
  waterMeterNumber?: string;
  defaultDepositAmount?: number;
  notes?: string;
}

// Editable fields for an existing house. Same reasoning: no `propertyId`
// (a house doesn't move to a different property) and no `status` (that
// has its own endpoint so status changes are always deliberate and can
// carry a reason).
export type UpdateHouseInput = Partial<Omit<CreateHouseInput, 'propertyId'>>;
