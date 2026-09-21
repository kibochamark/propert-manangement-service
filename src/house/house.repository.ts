import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { HouseStatus } from 'generated/prisma/enums';
import { CreateHouseInput, House, UpdateHouseInput } from 'src/types/house';

export interface HouseFilter {
  propertyId?: string;
  status?: HouseStatus;
}

// Owns all direct Prisma access for houses. The service layer decides
// *what* to save and enforces the business rules; this layer only knows
// *how* to save it.
@Injectable()
export class HouseRepository {
  private logger = new Logger(HouseRepository.name);
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateHouseInput): Promise<House> {
    this.logger.log(`Creating house ${input.unitNumber} for property ${input.propertyId}`);
    return this.prismaService.house.create({ data: input});
  }

  async findById(id: string): Promise<House | null> {
    this.logger.log(`Finding house with ID: ${id}`);
    return this.prismaService.house.findUnique({ where: { id },
    
      include: {
        tenancies: {
          select: {
            id: true,
            tenant: {
              select: {
                fullName: true,
                phone: true
              }
            },
          }
        },
        property: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async findHousesByPropertyId(id:string):Promise<House[]>{
    this.logger.log("Get houses for a property")
    return this.prismaService.house.findMany({
      where:{
        propertyId:id,
        
      },
      include: {
        tenancies: {
          select: {
            id: true,
            tenant: {
              select: {
                fullName: true,
                phone: true
              }
            },
          }
        },
        property: {
          select: {
            name: true
          }
        }
      }
    })

  }

  async findAll(filter: HouseFilter = {}): Promise<House[]> {
    this.logger.log(`Finding houses with filter: ${JSON.stringify(filter)}`);
    return this.prismaService.house.findMany({
      where: filter,
      orderBy: { unitNumber: 'asc' },
      include: {
        tenancies: {
          select: {
            id: true,
            tenant: {
              select: {
                fullName: true,
                phone: true
              }
            },
          }
        },
        property: {
          select: {
            name: true
          }
        }
      }
    });
  }

  async update(id: string, input: UpdateHouseInput): Promise<House> {
    this.logger.log(`Updating house with ID: ${id}`);
    return this.prismaService.house.update({ where: { id }, data: input });
  }

  async updateStatus(id: string, status: HouseStatus, notes?: string): Promise<House> {
    this.logger.log(`Updating house ${id} status to ${status}`);
    return this.prismaService.house.update({
      where: { id },
      data: { status, ...(notes !== undefined ? { notes } : {}) },
    });
  }

  async delete(id: string): Promise<House> {
    this.logger.log(`Deleting house with ID: ${id}`);
    return this.prismaService.house.delete({ where: { id } });
  }
}
