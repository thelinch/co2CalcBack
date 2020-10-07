import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelController } from './controllers/TravelController';
import { DriverType } from './models/DriverType.entity';
import { Travel } from './models/Travel.entity';
import { DriverTypeService } from './service/DriverType.service';
import { TravelService } from './service/Travel.service';

@Module({
    imports: [TypeOrmModule.forFeature([Travel, DriverType])],
    controllers: [TravelController],
    providers: [TravelService, DriverTypeService],
    exports: []
})
export class TravelsModule { }