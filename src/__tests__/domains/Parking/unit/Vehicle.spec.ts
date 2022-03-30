import {
  VehicleType,
  VehicleSize
} from '../../../../domains/Parking/enums/vehicle';
import { Vehicle } from '../../../../domains/Parking/domain/entities/Vehicle';

describe('Vehicle', () => {
  test('Should create a vehicle', () => {
    const vehicle = new Vehicle({
      plate: '123',
      type: VehicleType.CAR,
      size: VehicleSize.SMALL
    });

    expect(vehicle).toBeInstanceOf(Vehicle);
    expect(vehicle.plate).toBe('123');
  });

  test('Should not create a vehicle with invalid id', () => {
    const input = {
      plate: '',
      type: VehicleType.CAR,
      size: VehicleSize.SMALL
    };
    expect(() => new Vehicle(input)).toThrowError('The plate is required');
  });

  test('Should not create a vehicle with invalid type', () => {
    const input: any = {
      plate: '123',
      type: undefined,
      size: VehicleSize.SMALL
    };
    expect(() => new Vehicle(input)).toThrowError('VehicleType is required');
  });

  test('Should not create a vehicle with invalid size', () => {
    const input: any = {
      plate: '123',
      type: VehicleType.CAR,
      size: undefined
    };
    expect(() => new Vehicle(input)).toThrowError('VehicleSize is required');
  });
});
