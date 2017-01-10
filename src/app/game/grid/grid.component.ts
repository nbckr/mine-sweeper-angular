import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "../../dataprovider.service";
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-grid',
  template: `
      <div *ngIf="gridData" class="center-block" style="border:solid black 1px">
        <div *ngFor="let row of gridData" class="row">
            <div *ngFor="let cell of row">
              <app-cell
                [hasMine]="cell.hasMine"
                [isFlagged]="cell.isFlagged"
                [isRevealed]="cell.isRevealed"
                [surroundingMines]="cell.surroundingMines"
                [position]="cell.position"
              ></app-cell>
            </div>
        </div>
      </div>
  `,
  styles: [`
    :host {
    }
  `]
})
export class GridComponent implements OnInit {

  gridData: Object;
  private subscription: Subscription;

  constructor(private dataproviderService: DataProviderService) {
  }

  ngOnInit() {
    console.log("init grid");
    this.subscription = this.dataproviderService.getGameData().subscribe(
      value => {
        console.log("got new value from subscription");
        this.gridData = value.grid;
      }
    );

    //Counter already initializedffa
    //if (this.subscription && !this.gridData) {
    //  this.subscription.unsubscribe();
    //}
    //let counter = Observable.interval(4000);
    //this.subscription = counter.subscribe(
    //  num => {
    //    this.gridData = this.dataproviderService.getGameData();
    //  }
    //);
  }


}
