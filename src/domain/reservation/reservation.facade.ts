import { DataSource } from 'typeorm';
import { ConcertService } from './../concert/concert.service';
import { ReservationService } from './reservation.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationFacade {
  constructor(
    private readonly concertService: ConcertService,
    private readonly datasoure: DataSource,
    private readonly reservationService: ReservationService,
  ) {}

  async reservationSeat(sessionId: number, userId: number, seatId: number) {
    await this.datasoure.transaction(async (manager) => {
      const status = true;
      const { price } = await this.concertService.reservableSeat(
        seatId,
        manager,
      );
      await this.reservationService.createReservation(
        sessionId,
        userId,
        seatId,
        price,
        manager,
      );

      await this.concertService.updateSeatStatus(seatId, status, manager);
    });
  }
}
