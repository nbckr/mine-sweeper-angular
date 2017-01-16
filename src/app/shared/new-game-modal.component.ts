import { Component } from '@angular/core';

import { DialogRef, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {DataAccessService} from "./dataaccess.service";
import {Action} from "../models/action.interface";


@Component({
  selector: 'app-modal',
  templateUrl: 'new-game-modal.component.html',
  styles: [`
    img {
      width: 50%;
    }
    label {
      text-transform: capitalize;
      cursor: pointer;
    }
    button {
      cursor: pointer;
    }
    input[type=radio], input[type=checkbox] {
        visibility: hidden;
    }
  `]
})
export class NewGameModalComponent implements CloseGuard {
  sizes = [
    'small', 'medium', 'large'
  ];
  difficulties = [
    'beginner',
    'intermediate',
    'expert'
  ];
  options: Action = {
    action: 'start',
    difficulty: this.difficulties[0],
    size: this.sizes[0]
  };

  constructor(public dialog: DialogRef<any>, private dataProviderService: DataAccessService) {
    //this.context = dialog.context;
    dialog.setCloseGuard(this);
  }

  public onStartGame() {
    this.dataProviderService.sendAction(this.options);
    this.dialog.close();
  }

}
