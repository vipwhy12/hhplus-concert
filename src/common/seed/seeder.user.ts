import { Inject, Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { ConfigService } from '@nestjs/config';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/domain/user/user.repository';
import { UsersEntity } from 'src/domain/user/entities/user.entity';

@Injectable()
export class UserSeeder implements Seeder {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  async seed() {
    const dataCount = this.configService.get<number>('SEED_DATA_COUNT');
    const user = DataFactory.createForClass(UsersEntity).generate(dataCount);

    await this.userRepository.insert(user);
  }

  drop() {
    return this.userRepository.delete({});
  }
}
