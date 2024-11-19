import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { PointsService } from './points.service';
import { CargeRequestDto } from './dtos/request/chage.request.dto';

@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  /**
   * 잔액 조회
   */
  @Get('/:id')
  async getMyPoint(@Param('id') id: string) {
    return await this.pointsService.getMyPoint(id);
  }

  /**
   * 잔액 충전
   */
  @Patch('/:id')
  async charge(@Param('id') id: string, @Body() charge: CargeRequestDto) {
    const { balance } = charge;
    return await this.pointsService.charge(id, balance);
  }
}
