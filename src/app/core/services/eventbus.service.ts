import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {EventBusArgs} from './eventbus.args';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export enum EventType {
  HTTP_ERROR
}

@Injectable()
export class EventbusService {
  private messages = new Subject<EventBusArgs>();

  emit(eventType: EventType, data: any) {
    this.messages.next(new EventBusArgs(eventType, data));
  }

  observe(eventType: EventType): Observable<any> {
    return this.messages
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
