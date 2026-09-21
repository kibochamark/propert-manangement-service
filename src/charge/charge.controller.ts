import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ChargeService } from './charge.service';
import { ChargeControllerDTO, VoidChargeDTO } from 'src/validators/charge.validator';
import { CreateChargeInput } from 'src/types/charge';
import { ChargeType } from 'generated/prisma/enums';
import { KindeAuthGuard } from 'src/guards/auth.guard';

// This is what makes "any other charge that comes with the property" real:
// rent gets generated automatically (see RentModule), but water, trash,
// security and service-fee charges are all post-paid — the amount isn't
// known until the bill arrives — so the owner records them here by hand,
// the moment she knows the figure.
@Controller('charges')
@UseGuards(KindeAuthGuard)
export class ChargeController {
  constructor(private readonly chargeService: ChargeService) {}

  @Post()
  @Version('1')
  async createCharge(@Body() data: ChargeControllerDTO, @Req() req) {
    try {
      const input: CreateChargeInput = {
        tenancyId: data.tenancyId,
        type: data.type,
        amount: data.amount,
        periodMonth: data.periodMonth ? new Date(data.periodMonth) : undefined,
        description: data.description,
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
      };
      return await this.chargeService.createCharge(input, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to create charge');
    }
  }

  @Get()
  @Version('1')
  async getChargesByTenancy(@Query('tenancyId') tenancyId: string, @Query('type') type?: ChargeType) {
    try {
      return await this.chargeService.getChargesByTenancy(tenancyId, type);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch charges');
    }
  }

  @Get('charge/:id')
  @Version('1')
  async getChargeById(@Param('id') id: string) {
    try {
      return await this.chargeService.getChargeById(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch charge');
    }
  }

  @Patch('charge/:id/void')
  @Version('1')
  async voidCharge(@Param('id') id: string, @Body() data: VoidChargeDTO, @Req() req) {
    try {
      return await this.chargeService.voidCharge(id, data.reason, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to void charge');
    }
  }

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
