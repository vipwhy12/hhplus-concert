import { Controller, Get, Param } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { ConcertFindResponseDto } from './dtos/response/concert.find.response.dto';

@Controller('concerts')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  /**
   * 콘서트 목록 조회
   */
  @Get()
  async getConcerts(): Promise<ConcertFindResponseDto[]> {
    return await this.concertService.getConcerts();
  }

  /**
   * 특정 콘서트의 예약 가능 날짜 조회
   */
  @Get(':concertId/sessions')
  async reservableConcertSession(@Param('sessionId') sessionId: number) {
    return await this.concertService.reservableConcertSession(sessionId);
  }
}
