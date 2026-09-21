import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class PropertyControllerDTO {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    @IsOptional()
    ownerId: string;

    @IsString()
    @IsOptional()
    location?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    defaultWaterRate?: number;

    @IsString()
    @IsOptional()
    currency?: string;

}