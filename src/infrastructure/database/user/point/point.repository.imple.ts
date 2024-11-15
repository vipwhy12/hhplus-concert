import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PointEntity } from 'src/domain/points/entities/point.entity';
import { PointsRepository } from 'src/domain/points/points.repository';

import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class PointsRepositoryImple implements PointsRepository {
  constructor(
    @InjectRepository(PointEntity)
    private readonly point: Repository<PointEntity>,
  ) {}

  async findByUserId(id: number, manager?: EntityManager) {
    const pointRepository = manager
      ? manager.getRepository(PointEntity)
      : this.point;

    return pointRepository.findOne({ where: { id } });
  }

  async update(userId: number, balance: number, manager?: EntityManager) {
    const pointRepository = manager
      ? manager.getRepository(PointEntity)
      : this.point;

    return pointRepository.update({ userId }, { balance });
  }

  insert(point: Record<string, import('nestjs-seeder').FactoryValue>[]) {
    return this.point.save(point);
  }

  delete(arg0: {}) {
    throw new Error('Method not implemented.');
  }
}
