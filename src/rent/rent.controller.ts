import { Body, Controller, HttpException, HttpStatus, Post, Req, UseGuards, Version } from '@nestjs/common';
import { RentService } from './rent.service';
import { GenerateRentDTO } from 'src/validators/rent.validator';
import { KindeAuthGuard } from 'src/guards/auth.guard';

// A manual catch-up alongside the nightly job (rent.service.ts) — lets the
// owner backfill a month on demand (e.g. the cron was down, or she wants
// to generate a month early for a specific reason) without waiting for
// the scheduled run.
@Controller('rent')
@UseGuards(KindeAuthGuard)
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @Post('generate')
  @Version('1')
  async generateRent(@Body() data: GenerateRentDTO, @Req() req) {
    try {
      const targetMonth = data.month ? new Date(data.month) : new Date();
      return await this.rentService.generateRentForMonth(targetMonth, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to generate rent');
    }
  }

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
