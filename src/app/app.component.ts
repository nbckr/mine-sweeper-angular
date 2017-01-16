import {Component, OnInit} from '@angular/core';
import {DataAccessService} from "./shared/dataaccess.service";

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    // Prevent right clicks - would be better to only disable within grid
    document.oncontextmenu = function(e){
      e.stopPropagation();
      e.preventDefault();
    }
  }

}
