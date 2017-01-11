import { Component, OnInit } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {DataProviderService} from "./dataprovider.service";

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

@Component({
  selector: 'app-modal',
  //TODO: [ngClass] fix?
  templateUrl: 'new-game-modal.component.html',
  styles: [`
        img {
          width: 50%;
        }
        label {
          text-transform: capitalize;
        }
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
        
        input[type=radio], input[type=checkbox] {
            visibility: hidden;
        }
    `]
})
export class NewGameModalComponent implements CloseGuard, ModalComponent<CustomModalContext> {
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

  onKeyUp(value) {
    console.log("onkeyup")
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    console.log("beforedismiss")

    return true;
  }

  beforeClose(): boolean {
    console.log("beforeclose")

    return false;
  }

}
