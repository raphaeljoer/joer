import { Ticket } from '../entities/Ticket';

export interface ITicketRepository {
  getById(id: string): Ticket | undefined;
  save(ticket: Ticket): void;
}
