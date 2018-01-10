import {NgModule} from '@angular/core';
import {HoverableDirective} from './hoverable.directive';
import {FormatDatePipe} from './formatdate.pipe';
import {FormatDateTimePipe} from './formatdatetime.pipe';
import {HttpErrorComponent} from './components/httperror.component';
import {HateoasUtil} from './services/hateoas.util';
import {EventbusService} from './services/eventbus.service';

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
    EventbusService
  ]
})
export class CoreModule {
}
