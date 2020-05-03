import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UnitComponentComponent } from './unit-component/unit-component.component';
import { GamesComponentComponent } from './games-component/games-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitComponentComponent,
    GamesComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
