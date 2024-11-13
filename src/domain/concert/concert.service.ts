import { CONCERT_REPOSITORY, ConcertRepository } from './concert.repository';
import { Inject, Injectable } from '@nestjs/common';
import { ConcertFindResponseDto } from './dtos/response/concert.find.response.dto';
import { ConcertEntity } from './entities/concert.entity';

@Injectable()
export class ConcertService {
  constructor(
    @Inject(CONCERT_REPOSITORY)
    private readonly concertRepository: ConcertRepository,
  ) {}

  async getConcerts(): Promise<ConcertFindResponseDto[]> {
    const concerts = await this.concertRepository.getConcerts();

    return concerts.map(
      (concert: ConcertEntity) => new ConcertFindResponseDto(concert),
    );
  }
}
