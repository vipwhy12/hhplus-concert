import { Controller, Get } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { ConcertFindResponseDto } from './dtos/response/concert.find.response.dto';

@Controller('concert')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  /**
   * 콘서트 목록 조회
   */
  @Get()
  async getConcerts(): Promise<ConcertFindResponseDto[]> {
    return await this.concertService.getConcerts();
  }
}
