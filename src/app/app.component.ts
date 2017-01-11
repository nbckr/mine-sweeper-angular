import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "./shared/dataprovider.service";

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public dataproviderService: DataProviderService) {
  }

  ngOnInit() {
    // Init data provider as early as possible to open WebSockets
    this.dataproviderService.initService();
  }

}
