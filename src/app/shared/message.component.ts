import {Component, OnInit, state} from '@angular/core';
import {DataAccessService} from "./dataaccess.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-message',
  template: `
      <div *ngIf="stateShouldTriggerMessage()" class="alert {{ this.messages[this.state].type }} alert-dismissible fade show" role="alert">
          <img src="{{ this.messages[this.state].image }}" class="icon-medium">
          <button type="button" class="close" data-hide="alert" aria-label="Close" (click)="onCloseMessage()"><span aria-hidden="true">&times;</span></button>
          <div class="text">
              <h3>{{ this.messages[this.state].title }}</h3>
              <p>{{ this.messages[this.state].text }}</p>
          </div>
      </div>
  `,
  styles: [`
    .text {
      display: inline-block;
      width: 70%;
    }
    
      img {
      height: 6em;
        margin-right: 1.5em;
    }
  `]
})
export class MessageComponent implements OnInit {

  private subscription: Subscription;
  private state: string;

  private messages = {
    'GAME_LOST': {
      title: "Whooops. You're dead.",
      text: "Hate to say we told you so. Don't cry, try again.",
      image: "/assets/tombstone-red.svg",
      type: "alert-danger"
    },
    'GAME_WON': {
      title: "You won and it was really awesome!",
      text: "We always knew you could do it. Huge success. Tremendous. Okay enough of it now, play again.",
      image: "/assets/medal-green.svg",
      type: "alert-success"
    }
  };

  constructor(public dataProviderService: DataAccessService) {
  }

  ngOnInit() {
    this.subscription = this.dataProviderService.gameDataObservable.subscribe(
      value => {
        this.state = value.state;
      }
    );
  }

  onCloseMessage() {
    this.state = null; // little hacky, but does the trick
  }

  stateShouldTriggerMessage() {
    return this.state in this.messages;
  }
}
