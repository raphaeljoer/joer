import { Ticket } from '../domain/entities/Ticket';
import { ITicketRepository } from '../domain/repositories/ITicketRepository';

type CheckinExecuteParams = {
  id: string;
  checkinDate: Date;
};

type CheckinParams = {
  ticketRepository: ITicketRepository;
};

export class Checkin {
  private _ticketRepository: ITicketRepository;

  constructor({ ticketRepository }: CheckinParams) {
    this._ticketRepository = ticketRepository;
  }

  execute({ id, checkinDate }: CheckinExecuteParams): Ticket {
    if (this._ticketRepository.getById(id)) {
      throw new Error('Ticket already exist');
    }
    const ticket = new Ticket({ id, checkinDate });
    this._ticketRepository.save(ticket);
    return ticket;
  }
}
