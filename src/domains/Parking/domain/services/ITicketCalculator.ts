export interface ITicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number;
}
