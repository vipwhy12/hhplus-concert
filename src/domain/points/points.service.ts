import { Inject, Injectable } from '@nestjs/common';
import { POINTS_REPOSITORY, PointsRepository } from './points.repository';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class PointsService {
  constructor(
    @Inject(POINTS_REPOSITORY)
    private readonly pointsRepository: PointsRepository,
    private readonly dataSource: DataSource,
  ) {}

  async getMyPoint(id: string) {
    return await this.pointsRepository.findByUserId(id);
  }

  async charge(id: string, balance: number) {
    const updateBalance = await this.dataSource.transaction(async (manager) => {
      const myPoint = await this.pointsRepository.findByUserId(id, manager);
      const updatedBalance = myPoint.balance + balance;

      return await this.updateBalance(id, updatedBalance, manager);
    });

    return updateBalance;
  }

  async updateBalance(id: string, balance: number, manager?: EntityManager) {
    return await this.pointsRepository.update(id, balance, manager);
  }
}
