import { UserCreateDto } from "src/users/dto/UserCreateDto.dto"


export class TravelViewDto {
    id: string
    pointStart: string
    pointEnd: string
    quantityKilometers: number
    users: UserCreateDto[]
    calcCo2: number
    date: Date
}