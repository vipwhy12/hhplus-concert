import { CONCERT_REPOSITORY, ConcertRepository } from './concert.repository';
import { Inject, Injectable } from '@nestjs/common';
import { ConcertFindResponseDto } from './dtos/response/concert.find.response.dto';
import { ConcertEntity } from './entities/concert.entity';
import { EntityManager } from 'typeorm';

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

  async reservableConcertSession(concertId: string) {
    return await this.concertRepository.getReservableConcertSession(concertId);
  }

  async reservableSeat(seatId: string, manager?: EntityManager) {
    const seat = await this.concertRepository.getSeatById(seatId, manager);

    if (seat.isReserved) {
      throw new Error('이미 예약된 좌석입니다.');
    }
    return seat;
  }

  async updateSeatStatus(
    seatId: string,
    status: boolean,
    manager?: EntityManager,
  ) {
    return await this.concertRepository.updateSeatStatus(
      seatId,
      status,
      manager,
    );
  }
}
