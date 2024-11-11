import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';

import TypeOrmConfig from 'src/common/config/type.orm.config';
import RedisConfig from 'src/common/config/redis.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfig.asProvider()),
    RedisModule.forRootAsync(RedisConfig.asProvider()),
  ],
})
export class InfrastructureModule {}
