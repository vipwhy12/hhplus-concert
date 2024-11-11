import { WAITING_TOKEN_KEY } from '../constants/token.constant';

export class WaitingToken {
  static readonly WAITING_TOKEN_KEY = WAITING_TOKEN_KEY;
  userId: number;
  date: Date;

  constructor(userId: number, date: Date) {
    this.userId = userId;
    this.date = date;
  }
}
