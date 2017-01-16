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
import {WebSocketService} from "./shared/websocket.service";
import { CellComponent } from './game/cell.component';
import {DataAccessService} from "./shared/dataaccess.service";
import {CommonModule} from "@angular/common";

import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {ModalModule} from "angular2-modal";
import {NewGameModalComponent} from "./shared/new-game-modal.component";
import { AboutPageComponent } from './pages/about-page.component';
import {AuthService} from "./shared/auth.service";
import { MessageComponent } from './shared/message.component';
import {ResponsiveModule} from "ng2-responsive";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";



const firebaseConfig = {
  apiKey: "AIzaSyAyrbUQ3mDVVOhcANZfCWpDoCC6HZgKyvU",
  authDomain: "mine-sweeper-polymer.firebaseapp.com",
  databaseURL: "https://mine-sweeper-polymer.firebaseio.com/"
  //messagingSenderId: "996548128709"
};



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
    routing,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [
    WebSocketService,
    DataAccessService,
    AuthService
  ],
  entryComponents: [
    NewGameModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
