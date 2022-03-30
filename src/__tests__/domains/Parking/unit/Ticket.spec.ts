import {
  VehicleSize,
  VehicleType
} from './../../../../domains/Parking/enums/vehicle';
import { Ticket } from '../../../../domains/Parking/domain/entities/Ticket';
import { Vehicle } from '../../../../domains/Parking/domain/entities/Vehicle';

describe('Ticket', () => {
  test('Should not create a ticket without a id', () => {
    const input: any = {
      id: undefined,
      checkinDate: new Date('2022-01-01T10:00')
    };
    expect(() => new Ticket(input)).toThrow(new Error('id is missing'));
  });
  test('Should not create a ticket without a checkin date', () => {
    const input: any = {
      id: '123',
      checkinDate: undefined
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('Checkin date is missing')
    );
  });

  test('Should not create a new ticket with a checkout date', () => {
    const input = {
      id: '123',
      checkinDate: new Date('2022-01-01T10:00:00'),
      checkoutDate: new Date('2022-01-01T11:00:00')
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('You cannot create a new ticket with checkout date')
    );
  });

  test('Should set a vehicle in a ticket', () => {
    const input = {
      id: '123',
      checkinDate: new Date('2022-01-01T10:00:00')
    };
    const ticket = new Ticket(input);
    const vehicle = new Vehicle({
      plate: 'ABC-1234',
      type: VehicleType.CAR,
      size: VehicleSize.SMALL
    });
    ticket.setVehicle(vehicle);
    expect(ticket.vehicle).toBeDefined();
    expect(ticket.vehicle?.plate).toBe('ABC-1234');
    expect(ticket.vehicle?.type).toBe('CAR');
    expect(ticket.vehicle?.size).toBe('SMALL');
  });
});
