import {Injectable, OnInit} from '@angular/core';
import {Subject, Subscription, Observable, ReplaySubject} from "rxjs";
import {GameData} from "../game/gamedata.model";
import {WebsocketService} from "./websocket.service";
import {GridComponent} from "../game/grid.component";
//import 'rxjs/Rx';

@Injectable()
export class DataProviderService {

  private socket: Subject<any>;
  private message: string;

  private gameData: GameData;
  private gameDataSubject = new ReplaySubject<GameData>(1);

  constructor(websocketService: WebsocketService) {
    console.log("contruct data service")
    this.socket = websocketService.createWebSocket('ws://localhost:9000/socket');
    this.initService();
  }

  initService () {
    console.log("init data provider");
    this.socket.subscribe(
      message => {
        console.log("received msg from websocket!");
        console.log(JSON.parse(message.data))
        this.message = message.data;
        this.gameData = JSON.parse(message.data);
        this.gameDataSubject.next(JSON.parse(message.data));
      }
    );
  }

  public sendData(data: Object) {
    this.socket.next(data);
  }

  public sendGameMove(action: string, row: number, col: number) {
    this.sendData({
      action: action,
      row: row,
      col: col
    })
  }

  public getGameData(): Observable<GameData> {
    return this.gameDataSubject;
  }

}
