import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { PaymentMethod } from 'generated/prisma/enums';

export class DeductionLineDTO {
  @IsString()
  @IsNotEmpty()
  reason: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  // Optional: names the exact outstanding (non-deposit) charge this line
  // settles, so the amount is backed by a real internal payment instead
  // of just being a note. Leave out for a withholding reason that isn't
  // tied to a specific bill (e.g. "18 days short notice").
  @IsString()
  @IsOptional()
  chargeId?: string;
}

export class RecordSettlementDTO {
  // @Min(0), not @IsPositive — withholding the entire deposit (a refund
  // of 0) is a legitimate outcome and must not be rejected as invalid.
  @IsNumber()
  @Min(0)
  refundAmount: number;

  @IsDateString()
  @IsOptional()
  refundDate?: string;

  @IsEnum(PaymentMethod)
  @IsOptional()
  method?: PaymentMethod;

  @IsString()
  @IsOptional()
  notes?: string;

  // @Type() is load-bearing, not decoration: main.ts runs ValidationPipe
  // with { whitelist: true, forbidNonWhitelisted: true } — without the
  // class-transformer hint these arrive as plain literals and every key
  // gets stripped before validation ever sees them.
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeductionLineDTO)
  @IsOptional()
  deductions?: DeductionLineDTO[];

  // No `depositHeld` field here on purpose — it is computed server-side
  // from the Charge/Payment record and must never be accepted from the
  // client (forbidNonWhitelisted would 400 it anyway).
}
