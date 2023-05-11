import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { UserService } from './service/user/user.service';

@Module({
  controllers: [ProfileController],
  providers: [UserService]
})
export class UserModule {}
