import {Component, OnInit, Input} from '@angular/core';
import {Position} from "../models/position.model";
import {DataAccessService} from "../shared/dataaccess.service";

@Component({
  selector: 'app-cell',
  template: `
    <button (click)="onClick()" (contextmenu)="onRightClick()" 
      class="surrounding-{{ surroundingMines }}"
      [ngClass]="{'mine': hasMine, 'hidden': !isRevealed, 'shake-crazy shake-constant': hasMine && isRevealed, 'shake-hard shake-constant': hasMine && state === 'GAME_LOST' }">
      <span *ngIf="!this.isRevealed && !this.isFlagged"></span>
      <div *ngIf="!this.isRevealed && this.isFlagged" class="fa fa-flag"></div>
      <span *ngIf="this.isRevealed && !this.hasMine">{{this.surroundingMines}}</span>
      <span *ngIf="this.isRevealed && this.hasMine" class="fa fa-bomb"></span>
    </button>
  `,
  styleUrls: [
    'cell.component.less'
  ]
})
export class CellComponent implements OnInit {
  @Input() hasMine: boolean = false;
  @Input() isFlagged: boolean = false;
  @Input() isRevealed: boolean = false;
  @Input() position: Position = {row: 0, col: 0};
  @Input() surroundingMines: number = 0;
  @Input() state: string;

  constructor(private dataAccessService: DataAccessService) {}

  ngOnInit() {
  }

  onClick() {
    this.dataAccessService.sendGameMove('reveal', this.position.row, this.position.col);
  }

  onRightClick() {
    this.dataAccessService.sendGameMove('flag', this.position.row, this.position.col);

  }
}
