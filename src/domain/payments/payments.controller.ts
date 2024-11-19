import { PaymentsService } from './payments.service';
import { Controller, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('/')
  async capture() {
    return await this.paymentsService.capture();
  }
}
