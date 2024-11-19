import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { PAYMENTS_REPOSITORY, PaymentsRepository } from './payments.repository';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(PAYMENTS_REPOSITORY)
    private readonly paymentRepository: PaymentsRepository,
  ) {}

  async createPayment(
    userId: string,
    reservationId: string,
    amount: number,
    manager?: EntityManager,
  ) {
    await this.paymentRepository.createPayment(
      userId,
      reservationId,
      amount,
      manager,
    );
  }
}
