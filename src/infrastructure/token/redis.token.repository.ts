import { Inject } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { TokenRepository } from 'src/domain/token/token.repository';
import { WAITING_TOKEN_KEY } from 'src/domain/token/constants/token.constant';
import { WaitingToken } from 'src/domain/token/dtos/waiting.token.dto';

import Redis from 'ioredis';

export class RedisTokenRepository implements TokenRepository {
  private readonly client: Redis;

  constructor(@Inject() private readonly redisService: RedisService) {
    //TODO: HAVE TO CHANGE( Inject Redis Instance )
    this.client = this.redisService.getOrThrow();
  }

  async createWaitingToken(token: WaitingToken): Promise<number> {
    try {
      const { userId, date, tokenKey } = token;

      return await this.client.zadd(tokenKey, date.getTime(), userId);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create waiting token in Redis');
    }
  }
}
