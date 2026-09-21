import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaymentMethod } from 'generated/prisma/enums';

export class AllocationInputDTO {
  @IsString()
  chargeId: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}

export class RecordPaymentDTO {
  @IsString()
  tenancyId: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsDateString()
  paidAt: string;

  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @IsString()
  @IsOptional()
  reference?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  // Left out entirely for the common case — the owner just records the
  // payment and the auto-allocation cascade (3.3) figures out where it
  // goes. Only needed to override that, e.g. "this 30,000 is specifically
  // July arrears then August rent."
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AllocationInputDTO)
  @IsOptional()
  allocations?: AllocationInputDTO[];

  // 3.5 — set this (with a reason in `notes`) to proceed after being
  // warned that this reference was already used elsewhere.
  @IsBoolean()
  @IsOptional()
  confirmDuplicate?: boolean;
}

export class VoidPaymentDTO {
  @IsString()
  reason: string;
}
