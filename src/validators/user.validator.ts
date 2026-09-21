import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class UsersDTO {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    kindeId: string;

    @IsString()
    @IsOptional()
    role :"STAFF" | "OWNER" | "ADMIN";

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}