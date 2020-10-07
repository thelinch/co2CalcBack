import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "../service/UserService.service";


@Controller("user")
export class UserController {
    constructor(private userService: UserService) {

    }

    @Get()
    all() {
        return this.userService.all()
    }

}