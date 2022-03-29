import { ITicketRepository } from '../domain/repositories/ITicketRepository';
import { ITicketCalculator } from '../domain/services/ITicketCalculator';

type CheckoutParams = {
  ticketRepository: ITicketRepository;
  ticketCalculator: ITicketCalculator;
};

type CheckoutExecuteInput = {
  id: string;
  checkoutDate: Date;
};

type CheckoutExecuteOutput = {
  amount: number;
};

export class Checkout {
  private _ticketRepository: ITicketRepository;
  private _ticketCalculator: ITicketCalculator;

  constructor({ ticketRepository, ticketCalculator }: CheckoutParams) {
    this._ticketRepository = ticketRepository;
    this._ticketCalculator = ticketCalculator;
  }

  execute({ id, checkoutDate }: CheckoutExecuteInput): CheckoutExecuteOutput {
    const ticket = this._ticketRepository.getById(id);
    if (!ticket) throw new Error('Ticket not found');
    const amount = this._ticketCalculator.calculate(
      ticket.checkinDate,
      checkoutDate
    );

    return {
      amount
    };
  }
}
