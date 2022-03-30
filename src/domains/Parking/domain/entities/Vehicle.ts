import { VehicleType, VehicleSize } from './../../enums/vehicle';

type VehicleParams = {
  plate: string;
  type: VehicleType;
  size: VehicleSize;
};

export class Vehicle {
  plate: string;
  type: VehicleType;
  size: VehicleSize;

  constructor({ plate, size, type }: VehicleParams) {
    this.plate = plate;
    this.type = type;
    this.size = size;
    this._validate();
  }

  private _validate() {
    if (!this.plate) {
      throw new Error('The plate is required');
    }
    if (!this.type) {
      throw new Error('VehicleType is required');
    }
    if (!this.size) {
      throw new Error('VehicleSize is required');
    }
  }
}
