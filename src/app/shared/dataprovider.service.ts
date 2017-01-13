import {Injectable, OnInit} from '@angular/core';
import {Subject, Subscription, Observable, ReplaySubject} from "rxjs";
import {GameData} from "../game/gamedata.model";
import {WebsocketService} from "./websocket.service";
import {GridComponent} from "../game/grid.component";
//import 'rxjs/Rx';

@Injectable()
export class DataProviderService {

  private socket: Subject<any>;
  private counterSubscription: Subscription;
  private message: string;
  private sentMessage: string;

  private gameData: GameData;//= new GameData('FRESH_NG_GAME', new GridComponent());
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
        console.log(">>>>>>>>got sth!!");
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

  /**
   * No data yet
   */
  public triggerWebSocket() {
    console.log("triggerWS");
    this.socket.next({
      action: 'start',
      size: 'small',
      difficulty: 'beginner'
    });
  }

}
