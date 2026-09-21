import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards, Version } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantControllerDTO, UpdateTenantDTO } from 'src/validators/tenant.validator';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('tenants')
@UseGuards(KindeAuthGuard)
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @Version('1')
  async createTenant(@Body() data: TenantControllerDTO) {
    try {
      return await this.tenantService.createTenant(data);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to create tenant');
    }
  }

  @Get()
  @Version('1')
  async getAllTenants() {
    try {
      return await this.tenantService.getAllTenants();
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch tenants');
    }
  }

  @Get('tenant/:id')
  @Version('1')
  async getTenantById(@Param('id') id: string) {
    try {
      return await this.tenantService.getTenantById(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to fetch tenant');
    }
  }

  @Patch('tenant/:id')
  @Version('1')
  async updateTenant(@Param('id') id: string, @Body() data: UpdateTenantDTO) {
    try {
      return await this.tenantService.updateTenant(id, data);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to update tenant');
    }
  }

  @Delete('tenant/:id')
  @Version('1')
  async deleteTenant(@Param('id') id: string) {
    try {
      return await this.tenantService.deleteTenant(id);
    } catch (error) {
      this.rethrowOrWrap(error, 'Failed to delete tenant');
    }
  }

  private rethrowOrWrap(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      throw error;
    }
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
