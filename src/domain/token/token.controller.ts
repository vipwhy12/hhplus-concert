import { Body, Controller, Post } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenRequestDto } from './dtos/request/token.request.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  async registerInQueue(
    @Body() tokenRequestDto: TokenRequestDto,
  ): Promise<number> {
    const { id } = tokenRequestDto;

    return await this.tokenService.issueWaitingToken(id);
  }
}
