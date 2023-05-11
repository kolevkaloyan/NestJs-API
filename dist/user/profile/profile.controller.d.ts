import { UserService } from '../service/user/user.service';
import { UserDto } from '../dto/user.dto/user.dto';
export declare class ProfileController {
    private usersService;
    constructor(usersService: UserService);
    create(user: UserDto): UserDto;
    findAll(): UserDto[];
    removeUser(): UserDto[];
}
