import {ErrorHandler, NgModule} from '@angular/core';
import {LogService} from './log.service';
import {GlobalErrorHandler} from './errorhandler';

@NgModule({
  providers: [LogService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class LoggingModule {
}
