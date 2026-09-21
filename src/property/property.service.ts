import { Injectable } from '@nestjs/common';
import { PropertyRepository } from './property.repository';
import { CreatePropertyInput, Property } from 'src/types/property';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  async createProperty(input: CreatePropertyInput): Promise<Property> {
    return this.propertyRepository.create(input);
  }

  async getPropertyById(id: string): Promise<Property | null> {
    return this.propertyRepository.findById(id);
  }

  async getAllProperties(): Promise<Property[]> {
    return this.propertyRepository.findAll();
  }

  async updateProperty(id: string, input: Partial<CreatePropertyInput>): Promise<Property> {
    return this.propertyRepository.update(id, input);
  }

  async deleteProperty(id: string): Promise<Property> {
    return this.propertyRepository.delete(id);
  }

  async findPropertiesByOwnerId(ownerId: string): Promise<Property[]> {
    return this.propertyRepository.findByOwnerId(ownerId);
  }
}
