import { Vehicle } from './../../../domain/entities/Vehicle';
import { Ticket } from '../../../../../domains/Parking/domain/entities/Ticket';
import { ITicketRepository } from './../../../domain/repositories/ITicketRepository';
import { VehicleSize, VehicleType } from '../../../enums/vehicle';

const makeTicket = (
  id: string,
  checkinDate: Date,
  vehicle?: Vehicle
): Ticket => {
  const ticket = new Ticket({ id, checkinDate });
  if (vehicle) ticket.setVehicle(vehicle);
  return ticket;
};

export class TicketRepositoryMemory implements ITicketRepository {
  private _tickets: Ticket[];

  constructor() {
    const vehicle = new Vehicle({
      plate: 'ABC-1234',
      type: VehicleType.CAR,
      size: VehicleSize.LARGE
    });
    this._tickets = [
      makeTicket('001', new Date('2022-01-01T10:00'), undefined),
      makeTicket('002', new Date('2022-01-01T11:00'), undefined),
      makeTicket('003', new Date('2022-01-01T12:00'), undefined),
      makeTicket('004', new Date('2022-01-01T13:00'), vehicle)
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
