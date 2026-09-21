import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from "../prismaservice/prismaservice.service";
export declare class KindeAuthGuard implements CanActivate {
    private readonly configService;
    private readonly prismaService;
    private client;
    private kindeDomain;
    constructor(configService: ConfigService, prismaService: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private getKey;
    private validateToken;
}
