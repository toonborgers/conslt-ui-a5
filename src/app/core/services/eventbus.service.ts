import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {EventBusArgs} from './eventbus.args';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class EventbusService {
  private messages = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this.messages.next(new EventBusArgs(eventType, data));
  }

  observe(eventType: string): Observable<any> {
    return this.messages
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
