import { VehicleSize } from './enums/VehicleSize';
import { VehicleType } from './enums/VehicleType';

type Params = {
  plate: string;
  type: VehicleType;
  size: VehicleSize;
};

export class Vehicle {
  plate: string;
  type: VehicleType;
  size: VehicleSize;

  constructor(input: Params) {
    this.plate = input.plate;
    this.type = input.type;
    this.size = input.size;
  }
}
