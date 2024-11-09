import Redis from 'ioredis';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  private readonly redis: Redis;

  constructor(@Inject() private readonly redisService: RedisService) {
    this.redis = this.redisService.getOrThrow();
  }

  getRedis(): Redis {
    return this.redis;
  }
}
