import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs/Rx';

@Injectable()
export class WebsocketService{

  public createWebSocket(address: string): Subject<MessageEvent> {
    console.log("websocket service: create");

    let socket = new WebSocket(address);

    let observable = Observable.create(
      (observer: Observer<MessageEvent>) => {
        socket.onmessage = observer.next.bind(observer);
        socket.onerror = observer.error.bind(observer);
        socket.onclose = observer.complete.bind(observer);
        return socket.close.bind(socket);
      }
    );

    let observer = {
      next: (data: Object) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(data));
        } else {
          console.error("Couldn't send: WebSocket not OPEN")
        }
      }
    };

    return Subject.create(observer, observable);
  }
}
