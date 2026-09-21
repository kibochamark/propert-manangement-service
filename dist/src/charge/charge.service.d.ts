import { ChargeRepository } from './charge.repository';
import { Charge, CreateChargeInput } from "../types/charge";
import { ChargeType } from "../../generated/prisma/client";
export declare class ChargeService {
    private readonly chargeRepository;
    constructor(chargeRepository: ChargeRepository);
    createCharge(input: CreateChargeInput, createdById: string): Promise<Charge>;
    getChargeById(id: string): Promise<Charge>;
    getChargesByTenancy(tenancyId: string, type?: ChargeType): Promise<Charge[]>;
    voidCharge(id: string, reason: string, voidedById: string): Promise<Charge>;
}
