import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from '../dto/user.dto/user.dto';


@Controller('users')
export class ProfileController {
    constructor(private usersService: UserService){}
    
    @Post('/')
    create(@Body() user: UserDto): UserDto {
        return this.usersService.create(user);
    }

    @Get()
    findAll(): UserDto[] {
        return this.usersService.findAll();
    }

    @Delete()
    removeUser(): UserDto[] {
        return this.usersService.removeAll()
    }
}
