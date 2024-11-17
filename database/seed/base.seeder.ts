import { ConfigService } from '@nestjs/config';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';

export abstract class BaseSeeder<T> implements Seeder {
  constructor(
    private readonly repository: Repository<T>,
    private readonly configService: ConfigService,
    private readonly entityFactory: () => T,
  ) {}

  async seed() {
    const totalCount = this.configService.get<number>('SEED_DATA_COUNT');
    const batchSize = this.configService.get<number>('SEED_DATA_BATCH_SIZE');
    const totalBatches = Math.ceil(totalCount / batchSize);

    console.log(
      `✅ Starting seeding ${totalCount} items in ${totalBatches} batches.`,
    );

    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      const currentBatchSize = Math.min(
        batchSize,
        totalCount - batchIndex * batchSize,
      );
      const batchData: any = Array.from({ length: currentBatchSize }, () =>
        this.entityFactory(),
      );

      await this.repository.insert(batchData);
    }

    console.log('✅ Seeding ');
  }

  async drop() {
    return this.repository.clear();
  }
}
