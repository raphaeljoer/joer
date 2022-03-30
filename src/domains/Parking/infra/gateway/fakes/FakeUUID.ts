import { IUUID } from 'domains/Parking/domain/gateway/IUUID';

export class FakeUUID implements IUUID {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  generate(): string {
    return this._value;
  }
}
