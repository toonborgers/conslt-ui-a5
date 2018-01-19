import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslationModule} from './translate/module';
import {CoreModule} from './core/module';
import {MessagingModule} from './messaging/module';
import {ContextModule} from './context/module';
import {LoggingModule} from './log/module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    TranslationModule,
    MessagingModule,
    ContextModule,
    LoggingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
