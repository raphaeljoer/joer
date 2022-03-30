import { Checkout } from '../../../../domains/Parking/application/Checkout';
import { TicketCalculator } from '../../../../domains/Parking/application/TicketCalculator';
import { Checkin } from '../../../../domains/Parking/application/Checkin';
import { UUIDV4 } from './../../../../domains/Parking/infra/gateway/UUID';
import { TicketRepositoryMemory } from './../../../../domains/Parking/infra/repositories/memory/TicketRepositoryMemory';

describe('Checkin Checkout', () => {
  test('Should make checkin and checkout and calculate the ticket amount', () => {
    const uuid = new UUIDV4();
    const ticketRepository = new TicketRepositoryMemory();
    const checkin = new Checkin({ uuid, ticketRepository });
    const checkinDate = new Date('2022-01-01T10:00');
    const ticketCheckin = checkin.execute({ checkinDate });
    const ticketCalculator = new TicketCalculator();
    const checkout = new Checkout({ ticketRepository, ticketCalculator });
    const checkoutDate = new Date('2022-01-01T13:00');
    const ticketCheckout = checkout.execute({
      id: ticketCheckin.id,
      checkoutDate
    });

    expect(ticketCheckout.amount).toBe(15);
  });
});
