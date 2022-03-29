type TicketParams = {
  id: string;
  checkinDate: Date;
  checkoutDate?: Date;
};

export class Ticket {
  private _id: string;
  private _checkinDate: Date;
  private _checkoutDate: Date | undefined;

  constructor({ id, checkinDate, checkoutDate }: TicketParams) {
    this._id = id;
    this._checkinDate = checkinDate;
    this._checkoutDate = checkoutDate;
    this._validate();
  }

  get id() {
    return this._id;
  }

  get checkinDate() {
    return this._checkinDate;
  }

  get checkoutDate() {
    return this._checkoutDate;
  }

  setCheckout(checkoutDate: Date) {
    this._checkoutDate = checkoutDate;
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
