import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req, UseGuards, Version } from '@nestjs/common';
import { TenancyService } from './tenancy.service';
import { MoveInDTO } from 'src/validators/tenancy.validator';
import { MoveInInput } from 'src/types/tenancy';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('tenancies')
@UseGuards(KindeAuthGuard)
export class TenancyController {
  constructor(private readonly tenancyService: TenancyService) {}

  // 2.2 — the one-step move-in.
  @Post('move-in')
  @Version('1')
  async moveIn(@Body() data: MoveInDTO, @Req() req) {
    try {
      const input: MoveInInput = {
        houseId: data.houseId,
        tenantId: data.tenantId,
        tenant: data.tenant,
        monthlyRent: data.monthlyRent,
        depositRequired: data.depositRequired,
        startDate: new Date(data.startDate),
        expectedEndDate: data.expectedEndDate ? new Date(data.expectedEndDate) : undefined,
        openingWaterReading: data.openingWaterReading,
        notes: data.notes,
      };
      return await this.tenancyService.moveIn(input, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to move in tenant');
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

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
