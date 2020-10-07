import { Mapper } from "src/shared/Mapper";
import { TravelCreateDto } from "src/travels/dto/TravelCreateDto.dto";
import { Travel } from "src/travels/models/Travel.entity";
import { TravelViewDto } from "../dto/TravelViewDto.dto";

export class TravelMap extends Mapper<Travel>{
    public static toPersistence(travelCreateDto: TravelCreateDto): Travel {
        return {
            id: travelCreateDto.id,
            pointStart: travelCreateDto.pointStart,
            pointEnd: travelCreateDto.pointEnd,
            quantityKilometers: travelCreateDto.quantityKilometers,
            driverType: {
                id: travelCreateDto.driverTypeId
            },
            users: travelCreateDto.users
        }
    }
    public static toDto(travel: Travel): TravelViewDto {
        return {
            id: travel.id,
            pointStart: travel.pointStart,
            pointEnd: travel.pointEnd,
            quantityKilometers: travel.quantityKilometers,
            users: travel.users,
            calcCo2: travel.calcCo2 || 0,
            date: travel.dateCreated
        }
    }
}