import { IsDateString, IsEnum, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { ChargeType } from 'generated/prisma/enums';

// Covers both the rent job's internal use and the owner recording a
// post-paid bill by hand (water, trash, security, service fee) — the
// amount is whatever the actual bill/agreed figure is, there is no
// calculation happening here yet (that's Sprint 6 for water specifically).
export class ChargeControllerDTO {
  @IsString()
  tenancyId: string;

  @IsEnum(ChargeType)
  type: ChargeType;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsDateString()
  @IsOptional()
  periodMonth?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  dueDate?: string;
}

export class VoidChargeDTO {
  @IsString()
  reason: string;
}
