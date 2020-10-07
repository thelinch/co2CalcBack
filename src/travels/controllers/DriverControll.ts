import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TravelCreateDto } from "../dto/TravelCreateDto.dto";
import { DriverTypeService } from "../service/DriverType.service";
import { TravelService } from "../service/Travel.service";

@Controller("driver-type")
export class DriverTypeController {
    constructor(private driverService: DriverTypeService) {

    }

    @Get()
    all() {
        return this.driverService.all()
    }

}