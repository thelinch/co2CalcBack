import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverType } from './travels/models/DriverType.entity';
import { Travel } from './travels/models/Travel.entity';
import { TravelsModule } from './travels/travels.module';
import { User } from './users/models/User.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TravelsModule, UsersModule, TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "co2",
    entities: [DriverType,Travel,User],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
