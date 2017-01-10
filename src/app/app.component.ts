import {Component, OnInit} from '@angular/core';
import {DataproviderService} from "./dataprovider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'what';

  constructor(public dataproviderService: DataproviderService) {}

  ngOnInit() {
    this.dataproviderService.initService();
  }

}
