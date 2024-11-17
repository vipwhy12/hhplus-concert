import { BaseSeeder } from '../base.seeder';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { UsersEntity } from 'src/domain/user/entities/user.entity';
import { Repository } from 'typeorm';
import { FctoryUserEntity } from './user.factory';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserSeeder extends BaseSeeder<UsersEntity> {
  constructor(
    @InjectRepository(UsersEntity)
    userRepository: Repository<UsersEntity>,
    configService: ConfigService,
  ) {
    super(userRepository, configService, FctoryUserEntity);
  }
}
