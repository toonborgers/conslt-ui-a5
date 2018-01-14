import {EventType} from './eventbus.service';

export class EventBusArgs {
  constructor(public type: EventType, public data: any) {
  }
}
