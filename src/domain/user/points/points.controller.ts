import { Controller, Get, Param } from '@nestjs/common';
import { PointsService } from './points.service';

@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @Get('/:id')
  async getMyPoint(@Param('id') userid: string) {
    return await this.pointsService.getMyPoint(userid);
  }
}
