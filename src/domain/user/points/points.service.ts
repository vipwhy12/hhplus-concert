import { Inject, Injectable } from '@nestjs/common';
import { POINTS_REPOSITORY, PointsRepository } from './points.repository';

@Injectable()
export class PointsService {
  constructor(
    @Inject(POINTS_REPOSITORY)
    private readonly pointsRepository: PointsRepository,
  ) {}

  async getMyPoint(id: string) {
    const userId = Number(id);
    return await this.pointsRepository.getMyPoint(userId);
  }
}
