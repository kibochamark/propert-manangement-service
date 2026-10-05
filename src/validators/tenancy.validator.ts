import { IsDateString, IsEnum, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { HouseStatus } from 'generated/prisma/enums';

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

  // 5.1 — left out entirely, the service defaults it to the house's
  // property's defaultNoticePeriodDays. Frozen onto the tenancy, same as
  // monthlyRent/depositRequired above.
  @IsInt()
  @IsPositive()
  @IsOptional()
  noticePeriodDays?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}

// 5.1 — "I'm leaving, and here's when." Optional step: an emergency
// move-out can skip straight to vacate with none of this ever recorded.
export class RecordNoticeDTO {
  @IsDateString()
  noticeDate: string;

  @IsDateString()
  expectedEndDate: string;

  @IsString()
  @IsOptional()
  reason?: string;
}

// 5.2 — the mirror image of MoveInDTO.
export class VacateDTO {
  @IsDateString()
  actualEndDate: string;

  @IsString()
  @IsOptional()
  moveOutReason?: string;

  // @IsIn narrows this to the three statuses that make sense for a house
  // a tenant just left — @IsEnum alone would also let OCCUPIED/RESERVED/
  // NOTICE_GIVEN through, which are nonsense here.
  @IsEnum(HouseStatus)
  @IsIn([HouseStatus.VACANT, HouseStatus.MAINTENANCE, HouseStatus.INACTIVE])
  @IsOptional()
  houseStatusAfter?: HouseStatus;

  @IsString()
  @IsOptional()
  houseStatusReason?: string;
}
