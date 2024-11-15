import { Factory } from 'nestjs-seeder';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'seats' })
export class SeatEntity extends BaseEntity {
  @Column({ default: false })
  @Factory(() => false)
  isReserved: boolean;

  @Column()
  @Factory(() => String.fromCharCode(65 + Math.floor(Math.random() * 6)))
  seatArea: string;

  @Column()
  @Factory(() => Math.floor(Math.random() * 100) + 1)
  seatNumber: number;

  @Column()
  @Factory(() => Math.floor(Math.random() * 50000) + 10000)
  seatPrice: number;

  @Column()
  @Factory(() => Math.ceil(Math.random() * 5))
  concertSessionId: number;
}
