import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadreModule } from './padre/padre.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PadreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
