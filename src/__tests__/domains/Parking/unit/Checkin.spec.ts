import {
  VehicleSize,
  VehicleType
} from '../../../../domains/Parking/enums/vehicle';
import { FakeUUID } from './../../../../domains/Parking/infra/gateway/fakes/FakeUUID';
import { Checkin } from '../../../../domains/Parking/application/Checkin';
import { UUIDV4 } from './../../../../domains/Parking/infra/gateway/UUID';
import { TicketRepositoryMemory } from '../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';
import { Vehicle } from '../../../../domains/Parking/domain/entities/Vehicle';

describe('Checkin', () => {
  test('Should make checkin', () => {
    const uuid = new UUIDV4();
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ uuid, ticketRepository });
    const input = {
      checkinDate: new Date('2022-01-01T10:00')
    };
    const ticket = checkin.execute(input);
    expect(ticket.checkinDate).toBe(input.checkinDate);
  });

  test('Should not make checkin before 08:00am', () => {
    const uuid = new UUIDV4();
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ uuid, ticketRepository });
    const input = {
      checkinDate: new Date('2022-01-01T07:59')
    };
    expect(() => checkin.execute(input)).toThrowError(
      'You cannot make checkin before 08:00am'
    );
  });

  test('Should not make checkin after 10:00pm', () => {
    const uuid = new UUIDV4();
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ uuid, ticketRepository });
    const input = {
      checkinDate: new Date('2022-01-01T22:01')
    };
    expect(() => checkin.execute(input)).toThrowError(
      'You cannot make checkin after 10:00pm'
    );
  });

  test('Should not make checkin with existent ticket', () => {
    const uuid = new FakeUUID('001');
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ uuid, ticketRepository });
    const input = {
      checkinDate: new Date('2022-01-01T10:00')
    };
    expect(() => checkin.execute(input)).toThrowError('Ticket already exist');
  });

  test('Should make checkin with a vehicle', () => {
    const uuid = new UUIDV4();
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ uuid, ticketRepository });
    const vehicle = new Vehicle({
      plate: 'ABC-1234',
      size: VehicleSize.SMALL,
      type: VehicleType.CAR
    });
    const input = {
      checkinDate: new Date('2022-01-01T10:00'),
      vehicle
    };
    const ticket = checkin.execute(input);

    expect(ticket.vehicle).toBeDefined();
    expect(ticket.vehicle).toBe(vehicle);
    expect(ticket.vehicle?.plate).toBe('ABC-1234');
    expect(ticket.vehicle?.type).toBe('CAR');
    expect(ticket.vehicle?.size).toBe('SMALL');
  });
});
