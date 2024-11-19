import { EntityManager } from 'typeorm';

export const PAYMENTS_REPOSITORY = Symbol('PaymentRepository');
export interface PaymentsRepository {
  createPayment(
    userId: string,
    reservationId: string,
    amount: number,
    manager?: EntityManager,
  );
}
