import { IsNumber, IsString } from "class-validator";

//Data Transfer Object - DTO helps us to transfer the data among the different process.
export class UserDto {
    @IsNumber()
    id: 1;

    @IsString()
    name: 'Kaloyan';

    @IsString()
    lastName: 'Kolev';
}
