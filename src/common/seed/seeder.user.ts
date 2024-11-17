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
    const totalCount = this.configService.get<number>('SEED_DATA_COUNT'); // 총 데이터 개수
    const batchSize = 1000; // 한 번에 처리할 데이터 개수
    const totalBatches = Math.ceil(totalCount / batchSize); // 필요한 배치 수 계산

    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      const currentBatchSize = Math.min(
        batchSize,
        totalCount - batchIndex * batchSize,
      );

      const batchData =
        DataFactory.createForClass(UsersEntity).generate(currentBatchSize);

      await this.userRepository.insert(batchData);

      console.log(`Batch ${batchIndex + 1}/${totalBatches} inserted`);
    }
  }

  drop() {
    return this.userRepository.delete({});
  }
}
