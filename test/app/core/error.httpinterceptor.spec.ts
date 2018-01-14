import 'rxjs/observable/of';
import {EventbusService, EventType} from '../../../src/app/core/services/eventbus.service';
import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {ErrorHttpInterceptor} from '../../../src/app/core/error.httpinterceptor';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

describe('Error http interceptor', () => {
  let eventbusService: EventbusService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    eventbusService = new EventbusService();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: EventbusService,
          useValue: eventbusService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorHttpInterceptor,
          multi: true
        }
      ]
    });

    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('When error, send to event bus', (done) => {
    const url = 'http://does.not.work';
    const expectedStatus = 500;

    http.get(url)
      .catch((err, caught) => {
        return Observable.of('bla');
      })
      .subscribe();

    eventbusService.observe(EventType.HTTP_ERROR)
      .subscribe(status => {
        expect(status).toEqual(expectedStatus);
        done();
      });
    httpMock.expectOne(url)
      .error(new ErrorEvent(''), {status: 500});
  });
});

