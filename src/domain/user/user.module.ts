import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER_REPOSITORY } from './user.repository';
import { UserRepositoryImple } from 'src/infrastructure/database/user/user.repository.impl';
import { PointsModule } from './points/points.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';

@Module({
  imports: [PointsModule, TypeOrmModule.forFeature([UsersEntity])],
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
