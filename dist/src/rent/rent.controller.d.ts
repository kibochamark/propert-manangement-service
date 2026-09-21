import { RentService } from './rent.service';
import { GenerateRentDTO } from "../validators/rent.validator";
export declare class RentController {
    private readonly rentService;
    constructor(rentService: RentService);
    generateRent(data: GenerateRentDTO, req: any): Promise<{
        generated: number;
        skipped: number;
    }>;
    private rethrowOrWrap;
}
