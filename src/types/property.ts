// Re-export Prisma's own generated type for reads — this is what a row
// actually looks like coming back from the database, and it will always
// stay correct as the schema evolves (no hand-maintained copy to drift).
export type { Property } from '../../generated/prisma/client';

// What a caller supplies to create a property. Deliberately NOT the same
// shape as `Property`: there's no `id`/`createdAt`/`updatedAt` (the database
// assigns those), and the owner is linked via the plain `ownerId` foreign
// key — never a nested `owner` object, which Prisma only accepts wrapped
// in `connect`/`create`/`connectOrCreate`.
export interface CreatePropertyInput {
  name: string;
  address: string;
  ownerId: string;
  location?: string;
  description?: string;
  defaultWaterRate?: number;
  currency?: string;
}
