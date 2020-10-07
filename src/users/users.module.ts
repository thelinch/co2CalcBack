import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/UserController';
import { User } from './models/User.entity';
import { UserService } from './service/UserService.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    controllers: [UserController],
    providers: [UserService]

})
export class UsersModule { }
