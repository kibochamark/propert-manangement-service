import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
  Version,
} from '@nestjs/common';
import { SettlementService } from './settlement.service';
import { RecordSettlementDTO } from 'src/validators/settlement.validator';
import { RecordSettlementInput } from 'src/types/settlement';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('settlements')
@UseGuards(KindeAuthGuard)
export class SettlementController {
  constructor(private readonly settlementService: SettlementService) {}

  // 5.2 — works at ANY tenancy status, so the owner can review the
  // numbers before vacating at all, not just after.
  @Get('tenancy/:tenancyId/preview')
  @Version('1')
  async getPreview(@Param('tenancyId') tenancyId: string) {
    try {
      return await this.settlementService.buildPreview(tenancyId);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to build settlement preview');
    }
  }

  @Get('tenancy/:tenancyId')
  @Version('1')
  async getSettlement(@Param('tenancyId') tenancyId: string) {
    try {
      return await this.settlementService.getSettlement(tenancyId);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch deposit settlement');
    }
  }

  // 5.2 — the owner's actual refund decision, recorded once.
  @Post('tenancy/:tenancyId')
  @Version('1')
  async recordSettlement(@Param('tenancyId') tenancyId: string, @Body() data: RecordSettlementDTO, @Req() req) {
    try {
      const input: RecordSettlementInput = {
        refundAmount: data.refundAmount,
        refundDate: data.refundDate ? new Date(data.refundDate) : undefined,
        method: data.method,
        notes: data.notes,
        deductions: data.deductions,
      };
      return await this.settlementService.recordSettlement(tenancyId, input, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to record deposit settlement');
    }
  }

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
