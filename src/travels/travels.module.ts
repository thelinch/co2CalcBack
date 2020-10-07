import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverTypeController } from './controllers/DriverControll';
import { TravelController } from './controllers/TravelController';
import { DriverType } from './models/DriverType.entity';
import { Point } from './models/Point.entity';
import { Travel } from './models/Travel.entity';
import { DriverTypeService } from './service/DriverType.service';
import { TravelService } from './service/Travel.service';

@Module({
    imports: [TypeOrmModule.forFeature([Travel, DriverType,Point])],
    controllers: [TravelController,DriverTypeController],
    providers: [TravelService, DriverTypeService],
    exports: []
})
export class TravelsModule { }
