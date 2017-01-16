import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: 'instructions-page.component.html',
  styles: [`
    h3 {
      margin: .9em .4em;
    }
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
      width: 100%;
      margin: 2em auto 1em auto;
      display: block;
    }
    
    @media screen and (min-width: 768px) {
      .lol {
        width: 75%;
      }
    }
  `]
})
export class InstructionsPageComponent {

  constructor() { }

}
