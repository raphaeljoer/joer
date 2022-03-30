import { Checkout } from '../../../../domains/Parking/application/Checkout';
import { TicketRepositoryMemory } from './../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';
import { TicketCalculator } from './../../../../domains/Parking/application/TicketCalculator';

describe('Checkout', () => {
  test('Should not make checkout without a valid id', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const ticketCalculator = new TicketCalculator();
    const checkout = new Checkout({ ticketRepository, ticketCalculator });
    const input = {
      id: 'unkown',
      checkoutDate: new Date('2022-01-01T13:00')
    };
    expect(() => checkout.execute(input)).toThrowError('Ticket not found');
  });

  test('Should calculate the value for 3 hours', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const ticketCalculator = new TicketCalculator();
    const checkout = new Checkout({ ticketRepository, ticketCalculator });
    const input = {
      id: '001',
      checkoutDate: new Date('2022-01-01T13:00')
    };
    const ticket = checkout.execute(input);
    expect(ticket.amount).toBe(15);
  });

  test('Should calculate the value for 3 hours for larger car', () => {
    const ticketRepository = new TicketRepositoryMemory();
    const ticketCalculator = new TicketCalculator();
    const checkout = new Checkout({ ticketRepository, ticketCalculator });
    const input = {
      id: '004',
      checkoutDate: new Date('2022-01-01T16:00')
    };
    const ticket = checkout.execute(input);
    expect(ticket.amount).toBe(21);
  });
});
