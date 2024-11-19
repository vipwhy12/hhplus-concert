import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/domain/payments/entities/payment.entity';
import { PaymentsRepository } from 'src/domain/payments/payments.repository';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class PaymentsRepositoryImpl implements PaymentsRepository {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  async createPayment(
    userId: string,
    reservationId: string,
    amount: number,
    manger: EntityManager,
  ) {
    const repository = manger
      ? manger.getRepository(PaymentEntity)
      : this.paymentRepository;

    return repository.save({
      userId,
      reservationId,
      amount,
    });
  }
}
