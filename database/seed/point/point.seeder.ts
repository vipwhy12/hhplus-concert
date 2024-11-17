import { BaseSeeder } from '../base.seeder';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PointEntity } from 'src/domain/points/entities/point.entity';
import { FctoryPointEntity } from './point.factory';

@Injectable()
export class PointSeeder extends BaseSeeder<PointEntity> {
  constructor(
    @InjectRepository(PointEntity)
    pointRepository: Repository<PointEntity>,
    configService: ConfigService,
  ) {
    super(pointRepository, configService, FctoryPointEntity);
  }
}
