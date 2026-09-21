import { Prisma } from 'generated/prisma/client';

// Prisma returns Decimal columns as Decimal.js instances, not plain JS
// numbers (that's what avoids float rounding errors at rest). Every place
// that does arithmetic on money — balances, allocations — converts through
// here first, so that conversion happens in exactly one place.
export function toNumber(value: Prisma.Decimal | number | null | undefined): number {
  if (value === null || value === undefined) return 0;
  return typeof value === 'number' ? value : value.toNumber();
}
