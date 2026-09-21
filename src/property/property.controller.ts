import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Req, UseGuards, Version } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyInput } from 'src/types/property';
import { PropertyControllerDTO } from 'src/validators/property.validator';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('properties')
@UseGuards(KindeAuthGuard) // Apply the KindeAuthGuard to protect all routes in this controller
export class PropertyController {

    constructor(private readonly propertyService: PropertyService) {}



    @Post()
    @Version('1')
    async createProperty(@Body() data: PropertyControllerDTO, @Req() req) {
        try{

            // get ownerId from the request context or session (assuming you have a way to get the current user)
            const ownerId = req.user.id; //using authentication middleware

            // For demonstration, let's assume the ownerId is provided in the request body
            const input: CreatePropertyInput = {
                name: data.name,
                address: data.address,
                ownerId: ownerId, // This should be replaced with the actual ownerId from the session or context
                location: data.location,
                description: data.description,
                defaultWaterRate: data.defaultWaterRate,
                currency: data.currency,
            };

            const property = await this.propertyService.createProperty(input);
            return property;

        }catch (error) {
            throw new HttpException('Failed to create property', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    @Version('1')
    async getAllProperties(){
        try{
            const properties = await this.propertyService.getAllProperties();
            return properties;
        }catch (error) {
            throw new HttpException('Failed to fetch properties', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('property/:id')
    @Version('1')
    async getPropertyById(@Param('id') id: string){
        try{
            const property = await this.propertyService.getPropertyById(id);
            if(!property){
                throw new HttpException('Property not found', HttpStatus.NOT_FOUND);
            }
            return property;
        }catch (error) {
            throw new HttpException('Failed to fetch property', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Patch('property/:id')
    @Version('1')
    async updateProperty(@Param('id') id: string, @Body() data: Partial<PropertyControllerDTO>){
        try{
            const property = await this.propertyService.updateProperty(id, data);
            return property;
        }catch (error) {
            throw new HttpException('Failed to update property', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('property/:id')
    @Version('1')
    async deleteProperty(@Param('id') id: string){
        try{
            const property = await this.propertyService.deleteProperty(id);
            return property;
        }catch (error) {
            throw new HttpException('Failed to delete property', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get('owner/:ownerId')
    @Version('1')
    async findPropertiesByOwnerId(@Param('ownerId') ownerId: string){
        try{
            const properties = await this.propertyService.findPropertiesByOwnerId(ownerId);
            return properties;
        }catch (error) {
            throw new HttpException('Failed to fetch properties by owner', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
