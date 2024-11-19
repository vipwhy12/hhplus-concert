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

  async getReservationById(id: string, manager?: EntityManager) {
    const reservation = await this.reservationRepository.getReservationById(
      id,
      manager,
    );

    if (!reservation) {
      throw new Error('예약 정보가 없습니다');
    }
  }

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
