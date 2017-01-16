import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";

import {WebSocketService} from "./websocket.service";

import {GameData} from "../models/gamedata.model";
import {Action} from "../models/action.interface";


@Injectable()
export class DataAccessService {

  private _gameDataSubject = new ReplaySubject<GameData>(1);
  public gameDataObservable: Observable<GameData> = this._gameDataSubject.asObservable();

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.socketInputObservable.subscribe(message => {
      this._gameDataSubject.next(JSON.parse(message.data));
    })
  }

  public sendAction(action: Action) {
    this.webSocketService.send(action);
  }

  public sendGameMove(action: string, row: number, col: number) {
    this.sendAction({
      action: action,
      row: row,
      col: col
    })
  }

}
