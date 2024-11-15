import { Body, Controller, Post } from '@nestjs/common';
import { ReserationSeatRequestDto } from './dtos/reservation.seat.reqeust.dto';
import { ReservationFacade } from './reservation.facade';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationFacade: ReservationFacade) {}

  @Post()
  async reservationSeat(
    @Body() reservationSeatRequest: ReserationSeatRequestDto,
  ) {
    const { sessionId, userId, seatId } = reservationSeatRequest;
    return this.reservationFacade.reservationSeat(sessionId, userId, seatId);
  }
}
