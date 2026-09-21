import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { TenantControllerDTO } from './tenant.validator';

export class MoveInDTO {
  @IsString()
  houseId: string;

  @IsString()
  @IsOptional()
  tenantId?: string;

  // Required only when no existing tenantId is given — a move-in either
  // reuses a known tenant or creates one on the spot, never both.
  @ValidateIf((o: MoveInDTO) => !o.tenantId)
  @ValidateNested()
  @Type(() => TenantControllerDTO)
  tenant?: TenantControllerDTO;

  @IsNumber()
  @IsPositive()
  monthlyRent: number;

  // 2.3 — left out entirely, the service defaults it to monthlyRent.
  @IsNumber()
  @IsPositive()
  @IsOptional()
  depositRequired?: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  @IsOptional()
  expectedEndDate?: string;

  @IsNumber()
  @IsOptional()
  openingWaterReading?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}
