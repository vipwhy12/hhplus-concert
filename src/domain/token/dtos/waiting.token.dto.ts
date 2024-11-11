export class WaitingToken {
  userId: number;
  date: Date;
  tokenKey: string;

  constructor(userId: number, date: Date, tokenKey: string) {
    this.userId = userId;
    this.date = date;
    this.tokenKey = tokenKey;
  }
}
