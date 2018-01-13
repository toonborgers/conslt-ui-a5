import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslationModule} from './translate/module';
import {CoreModule} from './core/module';
import {MessagingModule} from './messaging/module';
import {ContextModule} from './context/module';


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
    ContextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
