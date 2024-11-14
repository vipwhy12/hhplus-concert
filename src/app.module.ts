import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

import TypeOrmConfig from './common/config/type.orm.config';
import RedisConfig from 'src/common/config/redis.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from './domain/payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      load: [TypeOrmConfig, RedisConfig],
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfig.asProvider()),
    DomainModule,
    InfrastructureModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
