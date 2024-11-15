import { Module } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { ConcertModule } from './concert/concert.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TokenModule, ConcertModule, UserModule],
})
export class DomainModule {}
