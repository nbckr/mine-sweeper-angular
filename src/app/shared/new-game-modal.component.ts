import { Component, OnInit } from '@angular/core';

import { DialogRef, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {DataProviderService} from "./dataprovider.service";

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: 'new-game-modal.component.html',
  styles: [`
        img {
          width: 50%;
        }
        label {
          text-transform: capitalize;
        }
        input[type=radio], input[type=checkbox] {
            visibility: hidden;
        }
    `]
})
export class NewGameModalComponent implements CloseGuard{
  sizes = [
    'small', 'medium', 'large'
  ];
  difficulties = [
    'beginner',
    'intermediate',
    'expert'
  ];
  options = {
    action: 'start',
    difficulty: this.difficulties[0],
    size: this.sizes[0]
  };

  context: CustomModalContext;

  constructor(public dialog: DialogRef<CustomModalContext>, private dataProviderService: DataProviderService) {
    this.context = dialog.context;
    dialog.setCloseGuard(this);
  }

  public onStartGame() {
    this.dataProviderService.sendData(this.options);
    this.dialog.close();
  }

}
