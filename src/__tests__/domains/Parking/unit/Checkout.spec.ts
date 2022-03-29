import { Checkout } from '../../../../domains/Parking/application/Checkout';
import { TicketRepositoryMemory } from './../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';

describe('Checkout', () => {
  test('Should calculate the value for 3 hours', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const checkout = new Checkout({ ticketRepository });
    const input = {
      id: '001',
      checkoutDate: new Date('2022-01-01T13:00')
    };
    const ticket = checkout.execute(input);
    expect(ticket.amount).toBe(15);
  });
});
