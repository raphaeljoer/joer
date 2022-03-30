import { Vehicle } from './../domain/entities/Vehicle';
import { IUUID } from './../domain/gateway/IUUID';
import { Ticket } from '../domain/entities/Ticket';
import { ITicketRepository } from '../domain/repositories/ITicketRepository';

type CheckinExecuteParams = {
  checkinDate: Date;
  vehicle?: Vehicle;
};

type CheckinParams = {
  uuid: IUUID;
  ticketRepository: ITicketRepository;
};

export class Checkin {
  private _id: string;
  private _ticketRepository: ITicketRepository;

  constructor({ uuid, ticketRepository }: CheckinParams) {
    this._id = uuid.generate();
    this._ticketRepository = ticketRepository;
  }

  execute({ checkinDate, vehicle }: CheckinExecuteParams): Ticket {
    const checkinHour = checkinDate.getHours();
    if (checkinHour < 8) {
      throw new Error('You cannot make checkin before 08:00am');
    }
    if (checkinHour >= 22) {
      throw new Error('You cannot make checkin after 10:00pm');
    }
    if (this._ticketRepository.getById(this._id)) {
      throw new Error('Ticket already exist');
    }
    const ticket = new Ticket({ id: this._id, checkinDate });
    if (vehicle) ticket.setVehicle(vehicle);
    this._ticketRepository.save(ticket);
    return ticket;
  }
}
