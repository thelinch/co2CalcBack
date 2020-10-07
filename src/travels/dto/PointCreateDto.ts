import { IsEnum, IsNotEmpty, IsNumber, isNumber, IsOptional } from "class-validator"


export class PointCreateDto {
    @IsOptional()
    id: number
    @IsEnum(["start", "end"], { message: "value not valid(end o start)" })
    type: string
    @IsNotEmpty({ message: "field name required" })
    name: string
    @IsNotEmpty({ message: "field lat required" })
    @IsNumber({}, { message: "field lat is number" })
    lat: number
    @IsNumber({}, { message: "field lng is number" })
    lng: number
}