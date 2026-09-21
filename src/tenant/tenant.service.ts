import { Injectable, NotFoundException } from '@nestjs/common';
import { TenantRepository } from './tenant.repository';
import { CreateTenantInput, Tenant, UpdateTenantInput } from 'src/types/tenant';

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  async createTenant(input: CreateTenantInput): Promise<Tenant> {
    return this.tenantRepository.create(input);
  }

  async getTenantById(id: string): Promise<Tenant> {
    const tenant = await this.tenantRepository.findById(id);
    if (!tenant) {
      throw new NotFoundException(`Tenant ${id} not found`);
    }
    return tenant;
  }

  async getAllTenants(): Promise<Tenant[]> {
    return this.tenantRepository.findAll();
  }

  async updateTenant(id: string, input: UpdateTenantInput): Promise<Tenant> {
    await this.getTenantById(id); // 404s early instead of surfacing a raw Prisma "record not found"
    return this.tenantRepository.update(id, input);
  }

  async deleteTenant(id: string): Promise<Tenant> {
    await this.getTenantById(id);
    return this.tenantRepository.delete(id);
  }
}
