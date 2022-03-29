import { Ticket } from '../../../../domains/Parking/domain/entities/Ticket';

describe('Ticket', () => {
  test('Should not create a ticket without a id', () => {
    const input: any = {
      id: undefined,
      checkinDate: new Date('2022-01-01T10:00')
    };
    expect(() => new Ticket(input)).toThrow(new Error('id is missing'));
  });
  test('Should not create a ticket without a checkin date', () => {
    const input: any = {
      id: '123',
      checkinDate: undefined
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('Checkin date is missing')
    );
  });

  test('Should not create a new ticket with a checkout date', () => {
    const input = {
      id: '123',
      checkinDate: new Date('2022-01-01T10:00:00'),
      checkoutDate: new Date('2022-01-01T11:00:00')
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('You cannot create a new ticket with checkout date')
    );
  });
});
