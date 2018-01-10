import {NgModule} from '@angular/core';
import {HateoasUtil} from './core.hateoas.util';
import {HoverableDirective} from './core.hoverable.directive';
import {FormatDatePipe} from './core.formatdate';
import {FormatDateTimePipe} from './core.formatdatetime';
import {HttpErrorComponent} from './components/core.httperror.component';

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
    HateoasUtil
  ]
})
export class CoreModule {
}
