import { IUUID } from 'domains/Parking/domain/gateway/IUUID';
import { v4 as uuidv4 } from 'uuid';

export class UUIDV4 implements IUUID {
  generate(): string {
    return uuidv4();
  }
}
