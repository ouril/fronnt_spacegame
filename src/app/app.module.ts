import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UnitComponentComponent } from './unit-component/unit-component.component';
import { GamesComponentComponent } from './games-component/games-component.component';
import { EnterComponent } from './enter/enter.component';
import { routes } from './routers';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UnitComponentComponent,
    GamesComponentComponent,
    EnterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
