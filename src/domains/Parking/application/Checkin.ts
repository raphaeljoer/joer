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
    const ticket = new Ticket({ id, checkinDate });
    this._ticketRepository.save(ticket);
    const t = this._ticketRepository.getById(id);
    if (!t) throw new Error('Could not found any ticket');
    return t;
  }
}
