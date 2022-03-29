import { Ticket } from '../../../../../domains/Parking/domain/entities/Ticket';
import { ITicketRepository } from './../../../domain/repositories/ITicketRepository';

export class TicketRepositoryMemory implements ITicketRepository {
  private _tickets: Ticket[];

  constructor() {
    this._tickets = [
      new Ticket({ id: '456', checkinDate: new Date('2022-01-01T10:00') }),
      new Ticket({ id: '789', checkinDate: new Date('2022-01-01T13:00') })
    ];
  }

  getById(id: string) {
    const ticket = this._tickets.find((t) => t.id === id);
    if (!ticket) throw new Error('Ticket not found');
    return ticket;
  }

  save(ticket: Ticket): void {
    this._tickets.push(ticket);
  }
}
