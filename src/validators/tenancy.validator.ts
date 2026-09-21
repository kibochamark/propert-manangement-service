import { IsDateString, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class MoveInDTO {
  @IsString()
  houseId: string;

  // The tenant must already exist — create one via POST /tenants first.
  // Prisma only needs the id to link the relation; move-in isn't a second
  // way to create a tenant.
  @IsString()
  tenantId: string;

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
