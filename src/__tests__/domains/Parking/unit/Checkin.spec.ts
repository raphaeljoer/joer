import { TicketRepositoryMemory } from '../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';
import { Checkin } from '../../../../domains/Parking/application/Checkin';

describe('Checkin', () => {
  test('Should make checkin', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ ticketRepository });
    const input = {
      id: '004',
      checkinDate: new Date('2022-01-01T10:00')
    };
    const ticket = checkin.execute(input);
    expect(ticket.checkinDate).toBe(input.checkinDate);
  });

  test('Should not create an existent ticket', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ ticketRepository });
    const input = {
      id: '003',
      checkinDate: new Date('2022-01-01T15:00')
    };

    expect(() => checkin.execute(input)).toThrowError('Ticket already exist');
  });
});
