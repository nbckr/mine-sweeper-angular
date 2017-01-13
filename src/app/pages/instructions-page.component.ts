import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: 'instructions-page.component.html',
  styles: [`
    .icon {
     width: 6em;
    }
    .left {
     margin: 0 1em 1em 0;
     float: left;
    }
    .right {
     margin: 0 0 1em 1em;
     float: right;
    }
    .lol {
      width: 75%;
      margin: 1em auto;
      display: block;
    }
  `]
})
export class InstructionsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
