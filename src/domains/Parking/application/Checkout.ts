import { ITicketRepository } from '../domain/repositories/ITicketRepository';

type CheckoutParams = {
  ticketRepository: ITicketRepository;
};

type CheckoutExecuteParams = {
  id: string;
  checkoutDate: Date;
};

export class Checkout {
  private _ticketRepository: ITicketRepository;

  constructor({ ticketRepository }: CheckoutParams) {
    this._ticketRepository = ticketRepository;
  }

  execute({ id, checkoutDate }: CheckoutExecuteParams) {
    const ticket = this._ticketRepository.getById(id);
    if (!ticket) throw new Error('Ticket not found');

    const amount =
      (checkoutDate.getHours() - ticket.checkinDate.getHours()) * 5;

    return {
      amount
    };
  }
}
