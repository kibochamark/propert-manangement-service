import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post, Req, UseGuards, Version } from '@nestjs/common';
import { TenancyService } from './tenancy.service';
import { BalanceService } from 'src/balance/balance.service';
import { MoveInDTO, RecordNoticeDTO, VacateDTO } from 'src/validators/tenancy.validator';
import { MoveInInput, RecordNoticeInput, VacateInput } from 'src/types/tenancy';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('tenancies')
@UseGuards(KindeAuthGuard)
export class TenancyController {
  constructor(
    private readonly tenancyService: TenancyService,
    private readonly balanceService: BalanceService,
  ) {}

  // 2.2 — the one-step move-in.
  @Post('move-in')
  @Version('1')
  async moveIn(@Body() data: MoveInDTO, @Req() req) {
    try {
      const input: MoveInInput = {
        houseId: data.houseId,
        tenantId: data.tenantId,
        monthlyRent: data.monthlyRent,
        depositRequired: data.depositRequired,
        startDate: new Date(data.startDate),
        expectedEndDate: data.expectedEndDate ? new Date(data.expectedEndDate) : undefined,
        openingWaterReading: data.openingWaterReading,
        noticePeriodDays: data.noticePeriodDays,
        notes: data.notes,
      };
      return await this.tenancyService.moveIn(input, req.user.id);
    } catch (error:any) {
      console.log(error.message)
      this.rethrowOrWrap(error, 'Failed to move in tenant');
    }
  }

  // 5.1 — optional: an emergency move-out can skip this and go straight
  // to vacate below.
  @Patch('tenancy/:id/notice')
  @Version('1')
  async recordNotice(@Param('id') id: string, @Body() data: RecordNoticeDTO, @Req() req) {
    try {
      const input: RecordNoticeInput = {
        noticeDate: new Date(data.noticeDate),
        expectedEndDate: new Date(data.expectedEndDate),
        reason: data.reason,
      };
      return await this.tenancyService.recordNotice(id, input, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to record notice');
    }
  }

  // 5.2 — the state half of moving out. Returns the settlement preview
  // alongside the updated tenancy so the owner sees the numbers
  // immediately, without a second call.
  @Patch('tenancy/:id/vacate')
  @Version('1')
  async vacate(@Param('id') id: string, @Body() data: VacateDTO, @Req() req) {
    try {
      const input: VacateInput = {
        actualEndDate: new Date(data.actualEndDate),
        moveOutReason: data.moveOutReason,
        houseStatusAfter: data.houseStatusAfter as VacateInput['houseStatusAfter'],
        houseStatusReason: data.houseStatusReason,
      };
      return await this.tenancyService.vacate(id, input, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to vacate tenancy');
    }
  }

  @Get('tenancy/:id')
  @Version('1')
  async getTenancyById(@Param('id') id: string) {
    try {
      return await this.tenancyService.getTenancyById(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch tenancy');
    }
  }

  // 2.4 — full tenant history for a house.
  @Get('house/:houseId')
  @Version('1')
  async getTenancyHistoryForHouse(@Param('houseId') houseId: string) {
    try {
      return await this.tenancyService.getTenancyHistoryForHouse(houseId);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch tenancy history');
    }
  }

  @Get('house/:houseId/active')
  @Version('1')
  async getActiveTenancyForHouse(@Param('houseId') houseId: string) {
    try {
      const tenancy = await this.tenancyService.getActiveTenancyForHouse(houseId);
      if (!tenancy) {
        throw new HttpException('No active tenancy for this house', HttpStatus.NOT_FOUND);
      }
      return tenancy;
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch active tenancy');
    }
  }

  // The answer to "has this tenant cleared out" — rent, deposit, water,
  // trash, everything, in one place. See BalanceService for how it's derived.
  @Get('tenancy/:id/balance')
  @Version('1')
  async getTenancyBalance(@Param('id') id: string) {
    try {
      await this.tenancyService.getTenancyById(id); // 404s if the tenancy doesn't exist
      return await this.balanceService.getTenancyBalance(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch tenancy balance');
    }
  }

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
