import { TicketRepositoryMemory } from '../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';
import { Checkin } from '../../../../domains/Parking/application/Checkin';

describe('Checkin', () => {
  test('Should make checkin', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ ticketRepository });
    const input = {
      id: '123',
      checkinDate: new Date('2022-01-01T10:00')
    };
    const ticket = checkin.execute(input);
    expect(ticket.checkinDate).toBe(input.checkinDate);
  });
});
