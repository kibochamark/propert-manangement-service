import { ChargeType } from 'generated/prisma/client';

// The four charge types that represent money HELD, not money EARNED. They
// are the only charges a deposit refund is computed from, and the only
// charges that must never appear as a suggested deduction FROM that
// refund — you cannot deduct from money that was never received; an
// unpaid deposit charge is already reflected in a lower depositHeld.
export const DEPOSIT_CHARGE_TYPES: ChargeType[] = [
  'RENTDEPOSIT',
  'WATERDEPOSIT',
  'TRASHDEPOSIT',
  'SECURITYDEPOSIT',
];

export function isDepositCharge(type: ChargeType): boolean {
  return DEPOSIT_CHARGE_TYPES.includes(type);
}
