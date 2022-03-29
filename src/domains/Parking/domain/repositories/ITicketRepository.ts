import { Ticket } from '../entities/Ticket';

export interface ITicketRepository {
  getById(id: string): Ticket;
  save(ticket: Ticket): void;
}
