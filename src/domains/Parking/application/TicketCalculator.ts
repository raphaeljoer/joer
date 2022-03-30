import { Vehicle } from './../domain/entities/Vehicle';
import { ITicketCalculator } from '../domain/services/ITicketCalculator';
import { VehicleSize, VehicleType } from '../enums/vehicle';

export class TicketCalculator implements ITicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date, vehicle?: Vehicle): number {
    const period = checkoutDate.getHours() - checkinDate.getHours();
    if (!vehicle) {
      return period * 5;
    }
    if (vehicle.type === VehicleType.MOTORCYCLE) {
      return period * 4;
    }
    const amount = {
      [VehicleSize.LARGE]: period * 7,
      [VehicleSize.MEDIUM]: period * 6,
      [VehicleSize.SMALL]: period * 5
    };

    return amount[vehicle.size];
  }
}
