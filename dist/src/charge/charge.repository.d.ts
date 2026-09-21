import { PrismaService } from "../prismaservice/prismaservice.service";
import { Charge, CreateChargeInput } from "../types/charge";
import { ChargeType } from "../../generated/prisma/enums";
export declare class ChargeRepository {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    create(input: CreateChargeInput, createdById: string): Promise<Charge>;
    findById(id: string): Promise<Charge | null>;
    findByTenancy(tenancyId: string, type?: ChargeType): Promise<Charge[]>;
    voidCharge(id: string, reason: string, voidedById: string): Promise<Charge>;
}
