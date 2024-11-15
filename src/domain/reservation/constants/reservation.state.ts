export const ReservationState = {
  /**
   * 결제 대기
   */
  PENDING: 'pending',

  /**
   * 결제 완료
   */
  PAID: 'paid',

  /**
   * 결제 대기 시간 초과
   */
  TIMEOUT: 'timeout',
} as const;

export type ReservationStateType =
  (typeof ReservationState)[keyof typeof ReservationState];
