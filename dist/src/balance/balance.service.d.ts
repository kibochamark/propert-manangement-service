import { PrismaService } from "../prismaservice/prismaservice.service";
import { OutstandingCharge, TenancyBalance } from "../types/balance";
import { Prisma } from "../../generated/prisma/client";
export declare class BalanceService {
    private readonly prismaService;
    private static readonly PRIORITY;
    constructor(prismaService: PrismaService);
    getOutstandingCharges(tenancyId: string, client?: Prisma.TransactionClient): Promise<OutstandingCharge[]>;
    getTenancyBalance(tenancyId: string, client?: Prisma.TransactionClient): Promise<TenancyBalance>;
}
