import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class TenantControllerDTO {
  @IsString()
  fullName: string;

  @IsString()
  phone: string;

  @IsString()
  @IsOptional()
  altPhone?: string;

  @IsString()
  @IsOptional()
  nationalId?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  occupation?: string;

  @IsString()
  @IsOptional()
  emergencyContactName?: string;

  @IsString()
  @IsOptional()
  emergencyContactPhone?: string;
}

// A real class via @nestjs/mapped-types (see the House module for why this
// matters) — every field optional, decorators preserved, so PATCH is
// actually validated instead of silently skipped.
export class UpdateTenantDTO extends PartialType(TenantControllerDTO) {}
