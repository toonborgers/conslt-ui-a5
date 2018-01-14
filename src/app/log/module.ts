import {NgModule} from '@angular/core';

@NgModule({})
export class LoggingModule {
  fmq() {
    StackTrace.fromError(new DOMError())
      .;
  }
}
