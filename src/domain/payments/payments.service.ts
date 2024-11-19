import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  capture() {
    throw new Error('Method not implemented.');
  }
  constructor() {}
}
