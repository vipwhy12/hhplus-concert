import { BaseSeeder } from '../base.seeder';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { FctoryConcertEntity } from './concert.factory';

@Injectable()
export class ConcertSeeder extends BaseSeeder<ConcertEntity> {
  constructor(
    @InjectRepository(ConcertEntity)
    concertRepository: Repository<ConcertEntity>,
    configService: ConfigService,
  ) {
    super(concertRepository, configService, FctoryConcertEntity);
  }
}
