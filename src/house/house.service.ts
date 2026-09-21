import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { HouseFilter, HouseRepository } from './house.repository';
import { CreateHouseInput, House, UpdateHouseInput } from 'src/types/house';
import { HouseStatus } from 'generated/prisma/enums';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class HouseService {
  constructor(private readonly houseRepository: HouseRepository) {}

  async createHouse(input: CreateHouseInput): Promise<House> {
    try {
      return await this.houseRepository.create(input);
    } catch (error:any) {
      console.log(error.message)
      throw this.toHttpError(error, input.propertyId, input.unitNumber);
    }
  }

  async getHouseById(id: string): Promise<House> {
    const house = await this.houseRepository.findById(id);
    if (!house) {
      throw new NotFoundException(`House ${id} not found`);
    }
    return house;
  }

  async getHousesByPropertyId(id:string):Promise<House[]| []>{
    const houses = await this.houseRepository.findHousesByPropertyId(id)
    if(!houses){
      return []
    }
    return houses
  }

  async getAllHouses(filter: HouseFilter = {}): Promise<House[]> {
    return this.houseRepository.findAll(filter);
  }

  async getHousesByProperty(propertyId: string): Promise<House[]> {
    return this.houseRepository.findAll({ propertyId });
  }

  async updateHouse(id: string, input: UpdateHouseInput): Promise<House> {
    await this.getHouseById(id); // 404s early instead of surfacing a raw Prisma "record not found"
    try {
      return await this.houseRepository.update(id, input);
    } catch (error) {
      throw this.toHttpError(error);
    }
  }

  // Mark a house's status by hand (1.5) — the owner's own words: "so the
  // system matches what's actually happening." Any status can be set to
  // any other status; there's no tenancy-aware guard yet (e.g. blocking
  // OCCUPIED without an active tenant) because the Tenancy module doesn't
  // exist yet — that belongs here once Sprint 2 lands.
  //
  // The reason, if given, is appended to the house's notes with a
  // timestamp rather than overwriting them, so nothing already written
  // about the house is lost. This is a lightweight stand-in for a real
  // audit log, which is Sprint 8.
  async changeStatus(id: string, status: HouseStatus, reason?: string): Promise<House> {
    const house = await this.getHouseById(id);

    let notes = house.notes ?? undefined;
    if (reason) {
      const entry = `[${new Date().toISOString()}] Status → ${status}: ${reason}`;
      notes = house.notes ? `${house.notes}\n${entry}` : entry;
    }

    return this.houseRepository.updateStatus(id, status, notes);
  }

  async deleteHouse(id: string): Promise<House> {
    await this.getHouseById(id);
    return this.houseRepository.delete(id);
  }

  // Translates Prisma's low-level error codes into the specific errors
  // requirement #33 calls for — a duplicate house number or a reference
  // to a property that doesn't exist should be flagged clearly, not
  // surfaced as a generic 500.
  private toHttpError(error: unknown, propertyId?: string, unitNumber?: string): unknown {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return new ConflictException(
            unitNumber
              ? `This property already has a house numbered "${unitNumber}"`
              : 'A house with these details already exists',
          );
        case 'P2003':
          return new BadRequestException(
            propertyId ? `Property "${propertyId}" does not exist` : 'Referenced record does not exist',
          );
        case 'P2025':
          return new NotFoundException('House not found');
      }
    }
    return error;
  }
}
