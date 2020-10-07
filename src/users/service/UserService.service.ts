import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserMap } from "../mappers/UserMapper";
import { User } from "../models/User.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }
    async all() {
        const userDtoMap = (await this.userRepository.find()).map((user) => (UserMap.toDto(user)))
        return userDtoMap

    }
}