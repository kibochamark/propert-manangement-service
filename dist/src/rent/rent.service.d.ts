import { PrismaService } from "../prismaservice/prismaservice.service";
export declare class RentService {
    private readonly prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    handleNightlyRentGeneration(): Promise<void>;
    generateRentForMonth(targetMonth: Date, createdById?: string): Promise<{
        generated: number;
        skipped: number;
    }>;
    private isWithinLeadWindow;
}
