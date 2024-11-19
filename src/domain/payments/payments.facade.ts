import { TokenService } from './../token/token.service';
import { PointsService } from './../points/points.service';
import { Injectable } from '@nestjs/common';
import { ReservationService } from '../reservation/reservation.service';
import { PaymentsService } from './payments.service';
import { UserService } from '../user/user.service';
import { DataSource } from 'typeorm';

@Injectable()
export class PaymentsFacade {
  constructor(
    private readonly datasoure: DataSource,
    private readonly userService: UserService,
    private readonly paymentsService: PaymentsService,
    private readonly pointsService: PointsService,
    private readonly reservationService: ReservationService,
    private readonly TokenService: TokenService,
  ) {}

  async capture(userId: string, reservationId: string, amount: number) {
    await this.datasoure.transaction(async (manager) => {
      const reservation = await this.reservationService.getReservationById(
        reservationId,
        manager,
      );

      const user = await this.userService.getUserById(userId, manager);

      if (user.balance < amount) throw new Error('잔액이 부족합니다');

      //3. 결제 금액 차감
      await this.pointsService.updateBalance(userId, amount, manager);

      //4. 결제 정보 저장
      await this.paymentsService.createPayment(
        userId,
        reservationId,
        amount,
        manager,
      );

      //5. 대기열 토큰 만료
    });
  }
}
