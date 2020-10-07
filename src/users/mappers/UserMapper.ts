import { Mapper } from "src/shared/Mapper";
import { UserViewDto } from "../dto/UserViewDto.dto";
import { User } from "../models/User.entity";

export class UserMap extends Mapper<User>{

    public static toDto(user: User): UserViewDto {
        return {
            id: user.id,
            name: user.name
        }
    }

}