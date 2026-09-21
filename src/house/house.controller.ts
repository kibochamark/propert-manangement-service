import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  Version,
} from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseControllerDTO, UpdateHouseDTO, UpdateHouseStatusDTO } from 'src/validators/house.validator';
import { CreateHouseInput } from 'src/types/house';
import { HouseStatus } from 'generated/prisma/enums';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('houses')
@UseGuards(KindeAuthGuard) // Apply the KindeAuthGuard to protect all routes in this controller
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  @Version('1')
  async createHouse(@Body() data: HouseControllerDTO) {
    try {
      const input: CreateHouseInput = { ...data };
      return await this.houseService.createHouse(input);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to create house');
    }
  }

  @Get()
  @Version('1')
  async getAllHouses(@Query('propertyId') propertyId?: string, @Query('status') status?: HouseStatus) {
    try {
      return await this.houseService.getAllHouses({ propertyId, status });
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch houses');
    }
  }

  @Get('property/:propertyId')
  @Version('1')
  async getHousesByProperty(@Param('propertyId') propertyId: string) {
    try {
      return await this.houseService.getHousesByProperty(propertyId);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch houses for property');
    }
  }

  @Get('house/:id')
  @Version('1')
  async getHouseById(@Param('id') id: string) {
    try {
      return await this.houseService.getHouseById(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch house');
    }
  }

  @Patch('house/:id')
  @Version('1')
  async updateHouse(@Param('id') id: string, @Body() data: UpdateHouseDTO) {
    try {
      return await this.houseService.updateHouse(id, data);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to update house');
    }
  }

  // 1.5 — "mark a house vacant myself." Kept as its own endpoint, separate
  // from the general edit above, so a status change is always deliberate
  // and can carry a reason.
  @Patch('house/:id/status')
  @Version('1')
  async changeHouseStatus(@Param('id') id: string, @Body() data: UpdateHouseStatusDTO) {
    try {
      return await this.houseService.changeStatus(id, data.status, data.reason);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to change house status');
    }
  }

  @Delete('house/:id')
  @Version('1')
  async deleteHouse(@Param('id') id: string) {
    try {
      return await this.houseService.deleteHouse(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to delete house');
    }
  }

  // Preserves whatever specific HTTP exception the service layer already
  // threw (404 / 409 / 400 ...) instead of masking it behind a generic
  // 500 — only a genuinely unexpected error gets wrapped here.
  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
