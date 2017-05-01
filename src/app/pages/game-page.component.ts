import {Component} from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: 'game-page.component.html',
  styles: [`
    :host {
    }
    .btn {
      cursor: pointer;
      margin-top: 1.5em;
    }
  `]
})
export class GamePageComponent {

  constructor() {
  }

}
