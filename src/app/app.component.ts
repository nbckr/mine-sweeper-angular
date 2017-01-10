import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "./dataprovider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'what';

  constructor(public dataproviderService: DataProviderService) {}

  ngOnInit() {
    this.dataproviderService.initService();
  }

}
