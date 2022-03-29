import { ITicketCalculator } from '../domain/services/ITicketCalculator';

export class TicketCalculator implements ITicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const period = checkoutDate.getHours() - checkinDate.getHours();
    return period * 5;
  }
}
