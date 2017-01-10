import { Component } from '@angular/core';
import {DataProviderService} from "../dataprovider.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent {

  constructor(private dataProviderService: DataProviderService) {}

  onNewGame() {
    this.dataProviderService.sendData({
      action: 'start',
      size: 'small',
      difficulty: 'beginner'
    })
  }

}
