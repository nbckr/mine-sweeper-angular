import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamePageComponent } from './pages/game-page.component';
import { HeaderComponent } from './shared/header.component';
import { InstructionsPageComponent } from './pages/instructions-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { GridComponent } from './game/grid.component';
import {routing} from "./app.routing";
import {WebsocketService} from "./shared/websocket.service";
import { CellComponent } from './game/cell.component';
import {DataProviderService} from "./shared/dataprovider.service";
import {CommonModule} from "@angular/common";

import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {ModalModule} from "angular2-modal";
import {NewGameModalComponent} from "./shared/new-game-modal.component";
import { AboutPageComponent } from './pages/about-page.component';
import {AuthService} from "./shared/auth.service";
import { MessageComponent } from './shared/message.component';
import {ResponsiveModule} from "ng2-responsive";


@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    HeaderComponent,
    InstructionsPageComponent,
    HomePageComponent,
    GridComponent,
    CellComponent,
    NewGameModalComponent,
    AboutPageComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    BootstrapModalModule,
    ModalModule.forRoot(),
    routing
  ],
  providers: [
    WebsocketService,
    DataProviderService,
    AuthService
  ],
  entryComponents: [
    NewGameModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
