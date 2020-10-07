import { IsNotEmpty, IsOptional, IsUUID } from "class-validator"


export class UserCreateDto {
    @IsNotEmpty({ message: "requerido" })
    @IsUUID("all", { message: "is not valid" })
    id: string
    @IsOptional()
    name: string
}