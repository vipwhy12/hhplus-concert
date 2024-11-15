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
    sessionId: number,
    userId: number,
    seatId: number,
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
