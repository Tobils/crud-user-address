import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Address } from "./address.entity";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private readonly address_repository: Repository<Address>
    ){}

    private logger: Logger = new Logger('address-service')

    public async save(createAddressDto: CreateAddressDto){
        const { location, address_notes } = createAddressDto
        const address = new Address()
        address.location = location
        address.address_notes = address_notes

        try {
            return await address.save();
        } catch (error) {
            return error;
        }
    }

    public async findOne(uuid: string){
        try {
            return await this.address_repository.findOneOrFail({uuid:uuid});
        } catch (error) {
            return error;
        }
    }

    public async findAll(){
        try {
            return await this.address_repository.find();
        } catch (error) {
            return error;
        }
    }
    
    public async update(uuid: string, updateAddressDto: UpdateAddressDto){
        try {
            await this.address_repository.update(uuid, updateAddressDto)
            return await this.address_repository.findOneOrFail({uuid: uuid})
        } catch (error) {
            return error;
        }
    }

    public async remove(uuid: string){
        try {
            await this.address_repository.softDelete({uuid: uuid});
            return await this.address_repository.find();
        } catch (error) {
            return error;
        }
    }
}