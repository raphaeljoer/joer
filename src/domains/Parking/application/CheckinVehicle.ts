import { IUUID } from './../domain/gateway/IUUID';
import { Ticket } from '../domain/entities/Ticket';
import { ITicketRepository } from '../domain/repositories/ITicketRepository';

type CheckinVehicleParams = {
  uuid: IUUID;
  ticketRepository: ITicketRepository;
};

export class CheckinVehicle {
  private _ticketRepository: any;
  private _id: string;

  constructor({ uuid, ticketRepository }: CheckinVehicleParams) {
    this._id = uuid.generate();
    this._ticketRepository = ticketRepository;
  }

  execute({ vehicle, checkinDate }): Ticket {}
}
