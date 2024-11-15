import { Inject, Injectable } from '@nestjs/common';
import { POINTS_REPOSITORY, PointsRepository } from './points.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class PointsService {
  constructor(
    @Inject(POINTS_REPOSITORY)
    private readonly pointsRepository: PointsRepository,
    private readonly dataSource: DataSource,
  ) {}

  async getMyPoint(id: string) {
    const userId = Number(id);
    return await this.pointsRepository.findByUserId(userId);
  }

  async charge(id: string, balance: number) {
    const userId = Number(id);
    const updateBalance = await this.dataSource.transaction(async (manager) => {
      const myPoint = await this.pointsRepository.findByUserId(userId, manager);
      const updatedBalance = myPoint.balance + balance;

      return await this.pointsRepository.update(
        userId,
        updatedBalance,
        manager,
      );
    });

    return updateBalance;
  }
}
