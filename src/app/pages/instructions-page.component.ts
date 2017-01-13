import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: 'instructions-page.component.html',
  styles: [`
    img {
     width: 6em;
    }
  `]
})
export class InstructionsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
