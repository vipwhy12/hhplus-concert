import { Inject, Injectable } from '@nestjs/common';
import { TokenRepository, TokenRepositoryToken } from './token.repository';
import { WaitingToken } from './dtos/waiting.token.dto';
import { WAITING_TOKEN_KEY } from './constants/token.constant';

@Injectable()
export class TokenService {
  constructor(
    @Inject(TokenRepositoryToken)
    private readonly tokenRepository: TokenRepository,
  ) {}

  async issueWaitingToken(userId: number): Promise<number> {
    const waitingToken = new WaitingToken(
      userId,
      new Date(),
      WAITING_TOKEN_KEY,
    );
    const myToken = await this.tokenRepository.createWaitingToken(waitingToken);

    return myToken;
  }
}
