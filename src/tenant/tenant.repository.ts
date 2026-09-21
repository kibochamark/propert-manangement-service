import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { CreateTenantInput, Tenant, UpdateTenantInput } from 'src/types/tenant';

// Owns all direct Prisma access for tenants. The service layer decides
// *what* to save; this layer only knows *how* to save it.
@Injectable()
export class TenantRepository {
  private logger = new Logger(TenantRepository.name);
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateTenantInput): Promise<Tenant> {
    this.logger.log(`Creating tenant: ${input.fullName}`);
    return this.prismaService.tenant.create({ data: input });
  }

  async findById(id: string): Promise<Tenant | null> {
    this.logger.log(`Finding tenant with ID: ${id}`);
    return this.prismaService.tenant.findUnique({ where: { id } });
  }

  async findAll(): Promise<Tenant[]> {
    this.logger.log('Finding all tenants');
    return this.prismaService.tenant.findMany({ orderBy: { fullName: 'asc' } });
  }

  async update(id: string, input: UpdateTenantInput): Promise<Tenant> {
    this.logger.log(`Updating tenant with ID: ${id}`);
    return this.prismaService.tenant.update({ where: { id }, data: input });
  }

  async delete(id: string): Promise<Tenant> {
    this.logger.log(`Deleting tenant with ID: ${id}`);
    return this.prismaService.tenant.delete({ where: { id } });
  }
}
