import {ErrorHandler, Injectable} from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import {LogService} from './log.service';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private logService: LogService) {
    super();
  }

  handleError(error: any): void {
    const message = error.message ? error.message : error.toString();

    console.log(error);
    StackTrace.fromError(error)
      .then(stackframes => {
        console.log(stackframes[0]);
        /*const first10StackItems = stackframes
          .slice(0, 10)
          .map(function (sf) {
            return sf.toString();
          });

        this.logService.exception(message, first10StackItems);*/

      });

    throw error;
  }

}
