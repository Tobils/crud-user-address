import { IsJSON, IsNumber, IsString } from "class-validator"

export class CreateAddressDto {

    @IsJSON()
    location: {
        origin: string
        latitude: number
        longitude: number
    }

    @IsString()
    address_notes: string
}