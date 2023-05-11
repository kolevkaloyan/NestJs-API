import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto/user.dto';

// main idea of a provider is that it can inject dependencies,
// this means that objects can create various relationships with each other 
@Injectable() 
export class UserService {
    public users: UserDto[] = [];

    create(user: UserDto): UserDto {
        this.users.push(user);
        return user;
    }
    //':' се използва когато искаш типизираш какво да се очаква да върне дадения метод
    findAll(): UserDto[] {
        return this.users;
    }

    removeAll():UserDto[] {
        this.users = []
        return this.users
    }

}
