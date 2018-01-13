import {APP_INITIALIZER, NgModule} from '@angular/core';
import {ContextService} from './context.service';
import {ContextInitializer} from './context.initializer';

@NgModule({
  providers: [
    ContextService,
    ContextInitializer,
    {provide: APP_INITIALIZER, useFactory: init, deps: [ContextInitializer], multi: true}
  ]
})
export class ContextModule {
}

export function init(contextInitializer: ContextInitializer) {
  return () => contextInitializer.initialize();
}
