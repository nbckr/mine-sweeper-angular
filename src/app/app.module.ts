import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './game/grid/grid.component';
import {routing} from "./app.routing";
import {HttpService} from "./http.service";
import {WebsocketService} from "./websocket.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    InstructionsComponent,
    HomeComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HttpService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
