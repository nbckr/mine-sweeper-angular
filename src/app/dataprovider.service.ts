import {Injectable, OnInit} from '@angular/core';
import {Subject, Subscription, Observable, ReplaySubject} from "rxjs";
import {GameData} from "./game/gamedata.model";
import {WebsocketService} from "./websocket.service";
import {GridComponent} from "./game/grid/grid.component";
//import 'rxjs/Rx';

@Injectable()
export class DataproviderService {

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

  private launchCounter() {
//Counter already initialized
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    let counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      num => {
        this.sentMessage = 'Websocket Message ' + num;
        this.socket.next(this.sentMessage);
      }
    );
  }

  public getGridDataFake() {
    return [
      [
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 0
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": true,
          "isRevealed": false,
          "position": {
            "row": 0,
            "col": 1
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 0,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 0,
            "col": 3
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 0,
            "col": 4
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 0,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 0,
            "col": 6
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 7
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 8
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 9
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 10
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 11
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 12
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 0,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 1,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 1,
            "col": 1
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 1,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 1,
            "col": 3
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 1,
            "col": 4
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 1,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 7
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 8
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 9
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 10
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 11
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 12
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 1,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 2,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 2,
            "col": 1
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 2,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 2,
            "col": 3
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 2,
            "col": 4
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 2,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 8
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 9
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 10
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 11
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 12
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 2,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 3,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 3,
            "col": 1
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 3,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 3,
            "col": 3
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 3,
            "col": 4
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 3,
            "col": 5
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 8
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 9
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 10
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 11
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 12
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 3,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 1
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 2
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 3
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 5
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 8
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 9
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 10
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 4,
            "col": 11
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 12
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 4,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 5,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 5,
            "col": 1
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 5,
            "col": 2
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 5,
            "col": 3
          },
          "surroundingMines": 3
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 5,
            "col": 4
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 6
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 8
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 9
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 5,
            "col": 10
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 11
          },
          "surroundingMines": 3
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 12
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 5,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 6,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 6,
            "col": 1
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 6,
            "col": 2
          },
          "surroundingMines": 3
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 6,
            "col": 3
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 6,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 7
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 9
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 6,
            "col": 10
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 11
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 12
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 6,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 1
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 2
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 3
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 9
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 7,
            "col": 10
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 7,
            "col": 11
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 7,
            "col": 12
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": true,
          "position": {
            "row": 7,
            "col": 13
          },
          "surroundingMines": 1
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 0
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 1
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 3
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 4
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 5
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 7
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 9
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 10
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 11
          },
          "surroundingMines": 4
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 12
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 8,
            "col": 13
          },
          "surroundingMines": 2
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 0
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 1
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 3
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 5
          },
          "surroundingMines": 3
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 9
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 10
          },
          "surroundingMines": 4
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 11
          },
          "surroundingMines": 4
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 12
          },
          "surroundingMines": 3
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 9,
            "col": 13
          },
          "surroundingMines": 2
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 0
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 1
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 3
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 6
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 9
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 10
          },
          "surroundingMines": 3
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 11
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 12
          },
          "surroundingMines": 3
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 10,
            "col": 13
          },
          "surroundingMines": 1
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 0
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 1
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 2
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 3
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 5
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 6
          },
          "surroundingMines": 3
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 7
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 8
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 9
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 10
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 11
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 12
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 11,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 0
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 1
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 2
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 3
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 5
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 6
          },
          "surroundingMines": 2
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 7
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 9
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 10
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 11
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 12
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 12,
            "col": 13
          },
          "surroundingMines": 0
        }
      ],
      [
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 0
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 1
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 2
          },
          "surroundingMines": 1
        },
        {
          "hasMine": true,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 3
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 4
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 5
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 6
          },
          "surroundingMines": 2
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 7
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 8
          },
          "surroundingMines": 1
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 9
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 10
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 11
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 12
          },
          "surroundingMines": 0
        },
        {
          "hasMine": false,
          "isFlagged": false,
          "isRevealed": false,
          "position": {
            "row": 13,
            "col": 13
          },
          "surroundingMines": 0
        }
      ]
    ]
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

    console.log("get grid data");

    return this.gameDataSubject;

    //console.log("getshit");
    //if (this.gameData) {
    //  console.log("yes");
    //  console.log(this.gameData);
    //  return this.gameData.grid;
    //} else {
    //  console.log("no");
    //  this.triggerWebSocket();
    //  return null;
    //}
  }

  /**
   * No data yet -
   * @private
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
