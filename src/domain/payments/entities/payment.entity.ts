import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('payments')
export class PaymentEntity extends BaseEntity {
  @Column({
    length: 36,
    name: 'user_id',
    comment: '사용자 식별자',
  })
  userId: string;

  @Column({
    length: 36,
    name: 'reservation_id',
    comment: '예약 식별자',
  })
  reservationId: string;

  @Column({
    type: 'bigint',
    comment: '결제 금액',
  })
  amount: number;
}
