import { Vehicle } from './../entities/Vehicle';
export interface ITicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date, vehicle?: Vehicle): number;
}
