import { Ticket } from '../../../../../domains/Parking/domain/entities/Ticket';
import { ITicketRepository } from './../../../domain/repositories/ITicketRepository';

export class TicketRepositoryMemory implements ITicketRepository {
  private _tickets: Ticket[];

  constructor() {
    this._tickets = [
      new Ticket({ id: '001', checkinDate: new Date('2022-01-01T10:00') }),
      new Ticket({ id: '002', checkinDate: new Date('2022-01-01T11:00') }),
      new Ticket({ id: '003', checkinDate: new Date('2022-01-01T12:00') })
    ];
  }

  getById(id: string) {
    const ticket = this._tickets.find((t) => t.id === id);
    return ticket;
  }

  save(ticket: Ticket): void {
    this._tickets.push(ticket);
  }
}
