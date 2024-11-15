import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { PointsService } from './points.service';

@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @Get('/:id')
  async getMyPoint(@Param('id') id: string) {
    return await this.pointsService.getMyPoint(id);
  }
}
