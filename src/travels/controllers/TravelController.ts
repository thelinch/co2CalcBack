import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TravelCreateDto } from "../dto/TravelCreateDto.dto";
import { TravelService } from "../service/Travel.service";

@Controller("travel")
export class TravelController {
    constructor(private travelService: TravelService) {

    }
    @Post()
    @HttpCode(204)
    save(@Body() travelCreateDto: TravelCreateDto) {
        this.travelService.save(travelCreateDto);
    }
    @Get()
    all() {
        return this.travelService.all()
    }

}