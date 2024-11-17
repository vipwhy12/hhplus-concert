import { EntityManager } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import {
  RESERVATION_REPOSITORY,
  ReservationRepository,
} from './reservation.repository';

@Injectable()
export class ReservationService {
  constructor(
    @Inject(RESERVATION_REPOSITORY)
    private readonly reservationRepository: ReservationRepository,
  ) {}

  async createReservation(
    sessionId: string,
    userId: string,
    seatId: string,
    price: number,
    manager?: EntityManager,
  ) {
    await this.reservationRepository.createReservation(
      sessionId,
      userId,
      seatId,
      price,
      manager,
    );
  }
}
