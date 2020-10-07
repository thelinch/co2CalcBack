import { UserCreateDto } from "src/users/dto/UserCreateDto.dto"
import { IsBoolean, IsInt, IsNotEmpty, IsUUID, MinLength, IsArray, ValidateNested } from 'class-validator';

export class TravelCreateDto {
    @IsNotEmpty({ message: "field id required" })
    @IsUUID("all", { message: "field id value is UUID" })
    id: string
    @IsNotEmpty({ message: "field driverTypeId required" })
    @IsUUID("all", { message: " field driverTypeId not valid" })
    driverTypeId: string
    @IsNotEmpty({ message: "field pointStart required" })
    @MinLength(5, { message: "field pointStart min 5" })
    pointStart: string
    @IsNotEmpty({ message: "field pointEnd required" })
    @MinLength(5, { message: "field pointEnd min 5" })
    pointEnd: string
    @IsNotEmpty({ message: "field quantityKilometers required" })
    quantityKilometers: number
    @IsArray()
    @ValidateNested()
    users: UserCreateDto[]
    @IsNotEmpty({ message: "outward required" })
    @IsBoolean({ message: "field outward is boolean" })
    outward: boolean
}