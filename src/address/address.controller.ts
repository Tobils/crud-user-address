import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';


@Controller('address')
export class AddressController {
    constructor(
        private readonly address_service: AddressService
    ){}

    @Post()
    save(
        @Body() createAddressDto: CreateAddressDto
    ){
        return this.address_service.save(createAddressDto)
    }

    @Get('/uuid?')
    findOne(
        @Query('uuid') uuid: string
    ){
        return this.address_service.findOne(uuid)
    }

    @Get()
    findAll(){
        return this.address_service.findAll()
    }

    @Put('/uuid?')
    update(
        @Query('uuid') uuid: string,
        @Body() updateAddressDto: UpdateAddressDto
    ){
        return this.address_service.update(uuid, updateAddressDto)
    }


    @Delete('/uuid?')
    remove(
        @Query('uuid') uuid: string
    ){
        return this.address_service.remove(uuid)
    }

}