type TicketParams = {
  id: string;
  checkinDate: Date;
};

export class Ticket {
  private _id: string;
  private _checkinDate: Date;

  constructor({ id, checkinDate }: TicketParams) {
    this._id = id;
    this._checkinDate = checkinDate;
    this._validate();
  }

  get id() {
    return this._id;
  }

  get checkinDate() {
    return this._checkinDate;
  }

  private _validate() {
    if (!this._checkinDate) {
      throw new Error('Checkin date is missing');
    }
    if (this._checkinDate.getHours() < 8) {
      throw new Error('You cannot create a ticket before 08:00am');
    }
    if (this._checkinDate.getHours() >= 22) {
      throw new Error('You cannot create a ticket after 10:00pm');
    }
  }
}
