import { UserCreateDto } from "src/users/dto/UserCreateDto.dto"


export class TravelViewDto {
    id: string
    quantityKilometers: number
    points: any[]
    driverType: any
    users: UserCreateDto[]
    calcCo2: number
    date: Date
}