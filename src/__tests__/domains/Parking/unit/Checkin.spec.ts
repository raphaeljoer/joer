import { Checkin } from '../../../../domains/Parking/application/Checkin';
import { UUIDV4 } from './../../../../domains/Parking/infra/gateway/UUID';
import { TicketRepositoryMemory } from '../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';

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
});
