import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { UserRepositoryImple } from 'src/infrastructure/database/user/user.repository.impl';
import { USER_REPOSITORY } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
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
