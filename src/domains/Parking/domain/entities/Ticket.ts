import { Vehicle } from './Vehicle';

type TicketParams = {
  id: string;
  checkinDate: Date;
  checkoutDate?: Date;
};
export class Ticket {
  private _id: string;
  private _checkinDate: Date;
  private _checkoutDate: Date | undefined;
  private _vehicle?: Vehicle | undefined;

  constructor({ id, checkinDate, checkoutDate }: TicketParams) {
    this._id = id;
    this._checkinDate = checkinDate;
    this._checkoutDate = checkoutDate;
    this._vehicle = undefined;
    this._validate();
  }

  get id() {
    return this._id;
  }

  get checkinDate() {
    return this._checkinDate;
  }

  get vehicle() {
    return this._vehicle;
  }

  setVehicle(vehicle: Vehicle) {
    if (this._vehicle) {
      throw new Error(
        'You cannot set a vehicle to a ticket that already has one'
      );
    }
    this._vehicle = vehicle;
  }

  private _validate() {
    if (!this._id) {
      throw new Error('id is missing');
    }
    if (!this._checkinDate) {
      throw new Error('Checkin date is missing');
    }
    if (this._checkoutDate) {
      throw new Error('You cannot create a new ticket with checkout date');
    }
  }
}
