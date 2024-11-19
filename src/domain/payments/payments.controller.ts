import { CaptureReqDto } from './dtos/reqeust/capture.reqeust.dto';
import { PaymentsFacade } from './payments.facade';
import { PaymentsService } from './payments.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly paymentsFacade: PaymentsFacade,
  ) {}

  @Post('/')
  async capture(@Body() captureReqDto: CaptureReqDto) {
    const { userId, reservationId, amount } = captureReqDto;

    return await this.paymentsFacade.capture(userId, reservationId, amount);
  }
}
