import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslationModule} from './translate/module';
import {CoreModule} from './core/module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    TranslationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
