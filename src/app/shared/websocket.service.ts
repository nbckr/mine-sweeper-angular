import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/Rx';
import {AuthService} from "./auth.service";
import {Action} from "../models/action.interface";

@Injectable()
export class WebSocketService {

  // manage exactly one WebSocket
  private socket: WebSocket;

  // the outside world gets updates independent from who the current WebSocket is talking to
  private _socketInputSubject: ReplaySubject<MessageEvent> = new ReplaySubject<MessageEvent>(1);
  public socketInputObservable = this._socketInputSubject.asObservable();

  constructor(private authService: AuthService) {

    // Whenever user changes, we want to internally switch to appropriate socket
    this.authService.currentUserObservable.subscribe(
      user => {
        console.log("User changed, open new WebSocket!");
        this.create('ws://localhost:9000/socket/' + user.id);
      }
    );
  }

  public create(address: string): void {
    if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
      this.socket.close();
    }

    this.socket = new WebSocket(address);

    // little hacky to put it here, but we want to get current game state as soon as WebSocket is OPEN
    this.socket.onopen = () => {
      console.log('WebSocket opened.');
      this.socket.send(JSON.stringify({action: 'touch'}))
    };

    this.socket.onmessage = (value) => {
      // We send pings periodically to keep WebSocket alive.
      if (value.data === 'ping') return;

      this._socketInputSubject.next(value);
    };
    this.socket.onerror = (error) => console.error('WebSocket error: ' + error);
    this.socket.onclose = () => console.log('WebSocket closed.');

  }

  public send(action: Action) {
    let message = JSON.stringify(action);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error("Couldn't send: WebSocket not OPEN")
    }
  }
}
