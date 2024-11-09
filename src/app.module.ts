import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { TypeOrmConfig } from './common/config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        TypeOrmConfig(configService),
    }),
    DomainModule,
    InfrastructureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
