import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER_REPOSITORY } from './user.repository';
import { UserRepositoryImple } from 'src/infrastructure/database/user/user.repository.impl';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImple,
    },
  ],
})
export class UserModule {}
