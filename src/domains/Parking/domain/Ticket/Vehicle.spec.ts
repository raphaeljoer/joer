import { VehicleSize } from '../Ticket/enums/VehicleSize';
import { VehicleType } from '../Ticket/enums/VehicleType';
import { Vehicle } from './Vehicle';

describe('Vehicle', () => {
  test('Should create a vehicle', () => {
    const input = {
      plate: 'AAA-1111',
      type: VehicleType.CAR,
      size: VehicleSize.SMALL
    };
    const vehicle = new Vehicle(input);
    expect(vehicle.plate).toBe(input.plate);
    expect(vehicle.type).toBe('car');
  });
});
