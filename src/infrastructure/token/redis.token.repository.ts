import { RedisService } from '@liaoliaots/nestjs-redis';
import { Inject } from '@nestjs/common';
import Redis from 'ioredis';
import { TokenRepository } from 'src/domain/token/token.repository';

export class RedisTokenRepository implements TokenRepository {
  private readonly client: Redis;

  constructor(@Inject() private readonly redisService: RedisService) {
    //TODO: HAVE TO CHANGE( Inject Redis Instance )
    this.client = this.redisService.getOrThrow();
  }

  async createWaitingToken({
    userId,
    date,
    WAITING_TOKEN_KEY,
  }): Promise<number> {
    const result = await this.client.zadd(
      WAITING_TOKEN_KEY,
      date.getTime(),
      userId,
    );

    return result;
  }
}
