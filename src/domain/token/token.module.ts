import { Module } from '@nestjs/common';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { TokenRepositoryToken } from './token.repository';
import { RedisTokenRepository } from 'src/infrastructure/token/redis.token.repository';

@Module({
  controllers: [TokenController],
  providers: [
    TokenService,
    {
      provide: TokenRepositoryToken,
      useClass: RedisTokenRepository,
    },
  ],
})
export class TokenModule {}