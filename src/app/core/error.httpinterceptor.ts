import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {EventbusService, EventType} from './services/eventbus.service';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  constructor(private eventbusService: EventbusService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch((error, caught) => {
      if (!(error instanceof HttpErrorResponse)) {
        Observable.throw(error);
      }

      const httpErrorResponse = error as HttpErrorResponse;
      this.eventbusService.emit(EventType.HTTP_ERROR, httpErrorResponse.status);

      return Observable.throw(error);
    });
  }
}
