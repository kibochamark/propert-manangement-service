// Re-export Prisma's own generated types for reads.
export type { DepositRefund, DepositDeduction } from '../../generated/prisma/client';
import { ChargeType, PaymentMethod, TenancyStatus } from '../../generated/prisma/enums';
import { DepositHeldLine } from './balance';

export type NoticeComplianceStatus = 'PROPER_NOTICE' | 'SHORT_NOTICE' | 'NO_NOTICE';

// 5.2 — a FLAG, never a price. There is deliberately no monetary field on
// this object, and nothing derived from it may ever reach
// suggestedDeductions. Short notice is the owner's call to make and
// justify in her own words, not a number this system invents.
export interface NoticeCompliance {
  status: NoticeComplianceStatus;
  requiredNoticeDays: number; // tenancy.noticePeriodDays, frozen at move-in
  noticeDate: Date | null;
  daysGiven: number | null; // null == no notice was ever given, not 0
  shortfallDays: number;
  endDateUsed: Date;
  basis: 'ACTUAL_END' | 'EXPECTED_END' | 'TODAY';
}

export interface SuggestedDeduction {
  chargeId: string;
  type: ChargeType;
  periodMonth: Date | null;
  reason: string; // pre-filled text the owner can edit, e.g. "Rent arrears for 2026-08"
  amount: number;
}

export interface SettlementPreview {
  tenancyId: string;
  tenancyStatus: TenancyStatus;
  canSettle: boolean;
  alreadySettled: boolean;

  deposit: {
    agreed: number; // tenancy.depositRequired — reference only, NOT the cap
    charged: number;
    held: number; // the refund ceiling
    neverPaid: number;
    lines: DepositHeldLine[];
  };

  arrears: { total: number; charges: SuggestedDeduction[] };
  totalOutstandingIncludingDeposit: number; // reconciles with GET .../balance
  unallocatedCredit: number; // real money held, not yet matched to any charge
  suggestedDeductions: SuggestedDeduction[]; // === arrears.charges
  suggestedRefundAmount: number;
  noticeCompliance: NoticeCompliance;
}

// chargeId is optional and is NOT persisted on the DepositDeduction row —
// it's a transient instruction: "this line also clears a real charge."
// When present, recordSettlement backs it with an internal Payment
// allocated to that charge, so the tenant's balance actually reflects
// what was settled. When absent, the line is purely the owner's own
// withholding reason (e.g. short notice) and touches no charge.
export interface DeductionLineInput {
  reason: string;
  amount: number;
  chargeId?: string;
}

export interface RecordSettlementInput {
  refundAmount: number;
  refundDate?: Date;
  method?: PaymentMethod;
  notes?: string;
  deductions?: DeductionLineInput[];
}
