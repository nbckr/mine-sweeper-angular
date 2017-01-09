import { Component } from '@angular/core';
import {Subject, Subscription, Observable} from "rxjs";
import {GameData} from "./gamedata.model";
import {WebsocketService} from "../websocket.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  private socket: Subject<any>;
  private counterSubscription: Subscription;
  private message: string;
  private sentMessage: string;

  private gameData: GameData;

  constructor(websocketService: WebsocketService){
    this.socket = websocketService.createWebsocket();
  }

  ngOnInit(){
    this.socket.subscribe(
      message => {
        this.message = message.data;
        this.gameData = JSON.parse(message.data);
      }
    );
  }

  private launchCounter(){
//Counter already initialized
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
    let counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      num => {
        this.sentMessage = 'Websocket Message '+ num;
        this.socket.next(this.sentMessage);
      }
    );
  }

}
