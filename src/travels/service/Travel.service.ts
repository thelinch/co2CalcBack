import { Injectable } from "@nestjs/common";
import { TravelCreateDto } from "../dto/TravelCreateDto.dto";
import { TravelRepository } from "../repository/TravelRepository";
import { TravelMap } from "../mappers/TravelMap"
import { TravelViewDto } from "../dto/TravelViewDto.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { DriverType } from "../models/DriverType.entity";
import { DriverTypeService } from "./DriverType.service";
import { Connection } from "typeorm";
@Injectable()
export class TravelService {
    constructor(private connection: Connection, private travelRepository: TravelRepository, private driverTypeService: DriverTypeService) {

    }
    async save(travelCreateDto: TravelCreateDto) {
        const travelEntitySaved = TravelMap.toPersistence(travelCreateDto);
        console.log(travelEntitySaved)
        const driverType = (await this.driverTypeService.findById(travelCreateDto.driverTypeId))
        const calcCo2 = driverType.quantityCo2ForKilometer * travelCreateDto.quantityKilometers * (travelCreateDto.outward ? 1 : 2)
        travelEntitySaved.calcCo2 = calcCo2;
        await this.travelRepository.save(travelEntitySaved);
    }

    async all(): Promise<TravelViewDto[]> {
        const travelsDto = (await this.travelRepository.find({ relations: ["users", "driverType","points"] })).map((travelEntity) => (TravelMap.toDto(travelEntity)));
        return travelsDto
    }
}