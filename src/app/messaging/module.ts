import {NgModule} from '@angular/core';
import {CoreModule} from '../core/module';
import {MessagingService} from './services/messaging.service';

@NgModule({
  imports: [
    CoreModule
  ],
  providers: [
    MessagingService
  ]
})
export class MessagingModule {
}
