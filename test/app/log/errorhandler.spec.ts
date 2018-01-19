import {GlobalErrorHandler} from '../../../src/app/log/errorhandler';
import {anyString, anything, instance, mock, verify} from 'ts-mockito';
import {LogService} from '../../../src/app/log/log.service';
import {async} from '@angular/core/testing';

describe('Global error handler', () => {
  let handler: GlobalErrorHandler;
  let logService: LogService;

  beforeEach(() => {
    logService = mock(LogService);
    handler = new GlobalErrorHandler(instance(logService));
  });

  it('qqsdmfj', async(() => {
    try {
      handler.handleError(new Error('Kapot'));
    } catch (e) {

    }

    verify(logService.exception(anyString(), anything())).once();
  }));
});
