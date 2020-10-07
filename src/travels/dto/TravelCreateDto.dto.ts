import { UserCreateDto } from "src/users/dto/UserCreateDto.dto"
import { IsBoolean, IsInt, IsNotEmpty, IsUUID, MinLength, IsArray, ValidateNested } from 'class-validator';
import { PointCreateDto } from "./pointCreateDto";

export class TravelCreateDto {
    @IsNotEmpty({ message: "field id required" })
    @IsUUID("all", { message: "field id value is UUID" })
    id: string
    @IsNotEmpty({ message: "field driverTypeId required" })
    @IsUUID("all", { message: " field driverTypeId not valid" })
    driverTypeId: string
    @IsNotEmpty({ message: "field quantityKilometers required" })
    quantityKilometers: number
    @ValidateNested()
    users: UserCreateDto[]
    @IsNotEmpty({ message: "field points required" })
    @ValidateNested()
    points: PointCreateDto[]
    @IsNotEmpty({ message: "outward required" })
    @IsBoolean({ message: "field outward is boolean" })
    outward: boolean
}