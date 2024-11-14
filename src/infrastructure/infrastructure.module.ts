import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';

import RedisConfig from 'src/common/config/redis.config';

@Module({
  imports: [RedisModule.forRootAsync(RedisConfig.asProvider())],
})
export class InfrastructureModule {}
