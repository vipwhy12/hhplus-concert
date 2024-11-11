import { WaitingToken } from './dtos/waiting.token.dto';

export const TokenRepositoryToken = Symbol('TokenRespository');
export interface TokenRepository {
  createWaitingToken(waitingToken: WaitingToken): Promise<number>;
}
