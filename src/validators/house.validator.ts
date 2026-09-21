import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { HouseStatus } from 'generated/prisma/enums';

export class HouseControllerDTO {
  @IsString()
  propertyId: string;

  @IsString()
  unitNumber: string;

  @IsString()
  @IsOptional()
  houseType?: string;

  @IsString()
  @IsOptional()
  waterMeterNumber?: string;

  @IsNumber()
  @IsPositive()
  defaultMonthlyRent: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  defaultDepositAmount?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}

// A real class (via @nestjs/mapped-types), not a `Partial<HouseControllerDTO>`
// type alias — a mapped type has no runtime representation, so Nest's
// ValidationPipe can't reflect it and silently skips validation entirely.
// `propertyId` is omitted: a house doesn't move to a different property.
export class UpdateHouseDTO extends PartialType(
  OmitType(HouseControllerDTO, ['propertyId'] as const),
) {}

// Kept separate from the general edit DTO on purpose — changing a house's
// status is its own deliberate action (1.5), not a side effect of editing
// its other details, and it can carry a reason for the record.
export class UpdateHouseStatusDTO {
  @IsEnum(HouseStatus)
  status: HouseStatus;

  @IsString()
  @IsOptional()
  reason?: string;
}
