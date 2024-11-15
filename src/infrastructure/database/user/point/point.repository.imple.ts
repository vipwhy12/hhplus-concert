import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PointEntity } from 'src/domain/user/points/entities/point.entity';
import { PointsRepository } from 'src/domain/user/points/points.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PointsRepositoryImple implements PointsRepository {
  constructor(
    @InjectRepository(PointEntity)
    private readonly user: Repository<PointEntity>,
  ) {}

  async findPointByUserId(id: number) {
    return this.user.find({ where: { id } });
  }
}
