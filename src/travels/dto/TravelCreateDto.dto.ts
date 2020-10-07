import { UserCreateDto } from "src/users/dto/UserCreateDto.dto"
import { IsBoolean, IsInt, IsNotEmpty, IsUUID, MinLength, IsArray, ValidateNested } from 'class-validator';

export class TravelCreateDto {
    @IsNotEmpty({ message: "required" })
    @IsUUID("all", { message: "not valid" })
    id: string
    @IsNotEmpty({ message: "required" })
    @IsInt({ message: "is integer" })
    driverTypeId: string
    @IsNotEmpty({ message: "required" })
    @MinLength(5, { message: "min 5" })
    pointStart: string
    @IsNotEmpty({ message: "required" })
    @MinLength(5, { message: "min 5" })
    pointEnd: string
    @IsNotEmpty({ message: "required" })
    quantityKilometers: number
    @IsArray({ each: true })
    @ValidateNested()
    users: UserCreateDto[]
    @IsNotEmpty({ message: "required" })
    @IsBoolean({ message: "field is boolean" })
    outward: boolean
}