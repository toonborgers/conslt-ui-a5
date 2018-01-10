import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslationService} from './services/translate.service';
import {TranslatePipe} from './translate.pipe';


export function init(translationService: TranslationService) {
  return () => translationService.fetchTranslations();
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    TranslationService,
    {provide: APP_INITIALIZER, useFactory: init, deps: [TranslationService], multi: true}
  ],
  declarations: [
    TranslatePipe
  ],
  exports: [
    TranslatePipe
  ]
})
export class TranslationModule {
}
