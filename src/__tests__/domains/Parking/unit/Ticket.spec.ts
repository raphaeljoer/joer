import { Ticket } from '../../../../domains/Parking/domain/entities/Ticket';

describe('Ticket', () => {
  test('Should not create a ticket without a checkin date', () => {
    const input: any = {
      id: '123',
      checkinDate: undefined
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('Checkin date is missing')
    );
  });

  test('Should not create a ticket before 08:00am', () => {
    const input = {
      id: '123',
      checkinDate: new Date('2022-01-01T07:59:59')
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('You cannot create a ticket before 08:00am')
    );
  });

  test('Should not create a ticket after 10:00pm', () => {
    const input = {
      id: '123',
      checkinDate: new Date('2022-01-01T22:00:01')
    };
    expect(() => new Ticket(input)).toThrow(
      new Error('You cannot create a ticket after 10:00pm')
    );
  });
});
