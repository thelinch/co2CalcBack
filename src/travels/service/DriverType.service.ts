import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DriverType } from "../models/DriverType.entity";

@Injectable()
export class DriverTypeService {
    constructor(@InjectRepository(DriverType) private driverTypeRepository: Repository<DriverType>) {

    }
    async findById(id: string) {
        const driverType = (await this.driverTypeRepository.findOne({ id: id }))
        return  driverType;
    }
}