import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    RedisModule.forRoot({
      readyLog: true,
      config: {
        host: process.env.REDIS_HOST,
        port: 6379,
        password: process.env.REDIS_PASSWORD,
      },
    }),
  ],
  providers: [CacheService],
})
export class CacheModule {}
