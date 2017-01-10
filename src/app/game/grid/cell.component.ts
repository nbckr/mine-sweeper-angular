import {Component, OnInit, Input} from '@angular/core';
import {Position} from "./position.model";
import {DataproviderService} from "../../dataprovider.service";

@Component({
  selector: 'app-cell',
  template: `
    <div (click)="onClick()" (contextmenu)="onRightClick()">
      <button *ngIf="this.isRevealed && !this.hasMine" class="btn btn-outline-primary">{{this.surroundingMines}}</button>
      <button *ngIf="this.isRevealed && this.hasMine" class="btn btn-outline-danger">[M]</button>
      <button *ngIf="this.isFlagged && !this.isRevealed" class="btn btn-outline-info">[F]</button>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
      margin: 3px;
      width: 40px;
      height: 40px;  
    }
    button {
      cursor: pointer;
    }
  `]
})
export class CellComponent implements OnInit {
  @Input() hasMine: boolean = false;
  @Input() isFlagged: boolean = false;
  @Input() isRevealed: boolean = false;
  @Input() position: Position = {row: 0, col: 0};
  @Input() surroundingMines: number = 0;

  constructor(public dataproviderService: DataproviderService) {}

  ngOnInit() {
  }

  onClick(e) {
    console.log("CLICK");
    this.dataproviderService.sendGameMove('reveal', this.position.row, this.position.col);
  }

  onRightClick() {
    this.dataproviderService.sendGameMove('flag', this.position.row, this.position.col);

  }
}
