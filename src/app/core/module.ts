import {NgModule} from '@angular/core';
import {HoverableDirective} from './hoverable.directive';
import {FormatDatePipe} from './formatdate.pipe';
import {FormatDateTimePipe} from './formatdatetime.pipe';
import {HttpErrorComponent} from './components/httperror.component';
import {HateoasUtil} from './services/hateoas.util';
import {EventbusService} from './services/eventbus.service';
import {WindowProvider} from './window';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorHttpInterceptor} from './error.httpinterceptor';

@NgModule({
  declarations: [
    HoverableDirective,
    FormatDatePipe,
    FormatDateTimePipe,
    HttpErrorComponent
  ],
  exports: [
    HoverableDirective,
    FormatDatePipe,
    FormatDateTimePipe,
    HttpErrorComponent
  ],
  providers: [
    HateoasUtil,
    EventbusService,
    WindowProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    }
  ],
  imports: [CommonModule]
})
export class CoreModule {
}
