import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "../shared/dataprovider.service";
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

  gridData: Object;
  state: string;
  private subscription: Subscription;

  constructor(private dataproviderService: DataProviderService) {
  }

  ngOnInit() {
    console.log("init grid");
    this.subscription = this.dataproviderService.getGameData().subscribe(
      value => {
        console.log("got new value from subscription");
        this.gridData = value.grid;
        this.state = value.state;
      }
    );
  }
}
