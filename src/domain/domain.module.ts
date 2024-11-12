import { Module } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { ConcertModule } from './concert/concert.module';

@Module({
  imports: [TokenModule, ConcertModule],
})
export class DomainModule {}
