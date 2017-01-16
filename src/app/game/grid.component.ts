import {Component, OnInit} from '@angular/core';
import {DataAccessService} from "../shared/dataaccess.service";
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-grid',
  template: `
      <div *ngIf="gridData" class="center-block shake-constant" id="grid"
            [ngClass]="{'shake-opacity': this.state === 'GAME_LOST', 'shake-slow': this.state === 'GAME_WON' }">
        <div *ngFor="let row of gridData" class="row">
              <app-cell
                *ngFor="let cell of row"
                [hasMine]="cell.hasMine"
                [isFlagged]="cell.isFlagged"
                [isRevealed]="cell.isRevealed"
                [surroundingMines]="cell.surroundingMines"
                [position]="cell.position"
                [state]="this.state"
              ></app-cell>
        </div>
      </div>
  `,
  styles: [`
    :host {
      display: block;
      margin: 10px auto;
    }
    #grid {
      display: inline-block;
      //align-content: center;
    }
    .row {
      display: block;
      white-space: nowrap;
    }
  `]
})
export class GridComponent implements OnInit {

  private gridData: Object;
  private state: string;

  constructor(private dataproviderService: DataAccessService) {
  }

  ngOnInit() {
    this.dataproviderService.gameDataObservable.subscribe(
      value => {
        this.gridData = value.grid;
        this.state = value.state;
      }
    );
  }
}
