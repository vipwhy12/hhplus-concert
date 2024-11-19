import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';
import { ReservationRepository } from 'src/domain/reservation/reservation.repository';
import { EntityManager, Repository } from 'typeorm';
import { ReservationState } from 'src/domain/reservation/constants/reservation.state';

@Injectable()
export class ReservationRepositoryImpl implements ReservationRepository {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservation: Repository<ReservationEntity>,
  ) {}

  createReservation(
    concertSessionId: string,
    userId: string,
    seatId: string,
    price: number,
    manager?: EntityManager,
  ) {
    const reservationRepository = manager
      ? manager.getRepository(ReservationEntity)
      : this.reservation;

    return reservationRepository.save({
      concertSessionId,
      userId,
      seatId,
      price,
      status: ReservationState.PENDING,
    });
  }

  async getReservationById(id: string, manager?: EntityManager) {
    const reservationRepository = manager
      ? manager.getRepository(ReservationEntity)
      : this.reservation;

    return reservationRepository.findOne({
      where: { id },
    });
  }
}
