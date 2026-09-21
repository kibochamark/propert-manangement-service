import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { CreatePropertyInput, Property } from 'src/types/property';

// Owns all direct Prisma access for properties. The service layer decides
// *what* to save; this layer only knows *how* to save it.
@Injectable()
export class PropertyRepository {
  private logger = new Logger('PropertyRepository');
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreatePropertyInput): Promise<Property> {
    this.logger.log(`Creating property with name: ${input.name}`);
    return this.prismaService.property.create({
      data: {
        name: input.name,
        address: input.address,
        ownerId: input.ownerId, // plain scalar FK — links the relation directly
        location: input.location,
        description: input.description,
        defaultWaterRate: input.defaultWaterRate,
        currency: input.currency,
      },
    });
  }

  async findById(id: string): Promise<Property | null> {
    this.logger.log(`Finding property with ID: ${id}`);
    return this.prismaService.property.findUnique({
      where: { id },
      include: {
        owner: {
            select: {
                id: true,
                name: true,
                kindeId: true
            },
        } // Include the related owner information
      },
    });
  }

  async findAll(): Promise<Property[]> {
    this.logger.log(`Finding all properties`);
    return this.prismaService.property.findMany(
        {
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                        kindeId: true
                    },
                } // Include the related owner information
            },
        }
    );
  }

  async update(id: string, input: Partial<CreatePropertyInput>): Promise<Property> { 
    this.logger.log(`Updating property with ID: ${id}`);
    return this.prismaService.property.update({
        where: { id },
        data: input,
    });

  }

  async delete(id: string): Promise<Property> {
    this.logger.log(`Deleting property with ID: ${id}`);
    return this.prismaService.property.delete({
        where: { id },
    });
  }

  async findByOwnerId(ownerId: string): Promise<Property[]> {
    this.logger.log(`Finding properties with owner ID: ${ownerId}`);
    return this.prismaService.property.findMany({
      where: { ownerId },
        include: {
            owner: {
                select: {
                    id: true,
                    name: true,
                    kindeId: true
                },
            } // Include the related owner information
        },
    });
  }






}
