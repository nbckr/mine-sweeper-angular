import {Component, OnInit, Input} from '@angular/core';
import {Position} from "./position.model";
import {DataProviderService} from "../../dataprovider.service";

@Component({
  selector: 'app-cell',
  template: `
    <button (click)="onClick()" (contextmenu)="onRightClick()" [ngClass]="{'mine': hasMine, 'hidden': !isRevealed }"
    
    
      class="btn surrounding-{{ surroundingMines }}">
      <span *ngIf="!this.isRevealed && !this.isFlagged"><i class="fa fa-camera-retro fa-3x"></i></span>
      <span *ngIf="!this.isRevealed && this.isFlagged" class="fa fa-flag"></span>
      <span *ngIf="this.isRevealed && !this.hasMine">{{this.surroundingMines}}</span>
      <span *ngIf="this.isRevealed && this.hasMine" class="fa fa-bomb"></span>
    </button>
  `,
  styleUrls: ['./cell.component.less']
})
export class CellComponent implements OnInit {
  @Input() hasMine: boolean = false;
  @Input() isFlagged: boolean = false;
  @Input() isRevealed: boolean = false;
  @Input() position: Position = {row: 0, col: 0};
  @Input() surroundingMines: number = 0;

  constructor(public dataproviderService: DataProviderService) {}

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
