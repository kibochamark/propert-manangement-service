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
import { PaymentService } from './payment.service';
import { RecordPaymentDTO, VoidPaymentDTO } from 'src/validators/payment.validator';
import { RecordPaymentInput } from 'src/types/payment';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('payments')
@UseGuards(KindeAuthGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // 3.2 + 3.3 + 3.5 in one call — see payment.service.ts for why.
  @Post()
  @Version('1')
  async recordPayment(@Body() data: RecordPaymentDTO, @Req() req) {
    try {
      const input: RecordPaymentInput = {
        tenancyId: data.tenancyId,
        amount: data.amount,
        paidAt: new Date(data.paidAt),
        method: data.method,
        reference: data.reference,
        notes: data.notes,
        allocations: data.allocations,
        confirmDuplicate: data.confirmDuplicate,
      };
      return await this.paymentService.recordPayment(input, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to record payment');
    }
  }

  @Get()
  @Version('1')
  async getPaymentsByTenancy(@Query('tenancyId') tenancyId: string) {
    try {
      return await this.paymentService.getPaymentsByTenancy(tenancyId);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch payments');
    }
  }

  @Get('payment/:id')
  @Version('1')
  async getPaymentById(@Param('id') id: string) {
    try {
      return await this.paymentService.getPaymentById(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch payment');
    }
  }

  // 3.6 — reverse, never delete.
  @Patch('payment/:id/void')
  @Version('1')
  async voidPayment(@Param('id') id: string, @Body() data: VoidPaymentDTO, @Req() req) {
    try {
      return await this.paymentService.voidPayment(id, data.reason, req.user.id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to void payment');
    }
  }

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
