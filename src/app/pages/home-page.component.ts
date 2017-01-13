import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styles: [`
    img {
        width: 11em;
        display: block;
        margin: auto;
    }
    h1, a {
      margin: .8em;
    }
  `]
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPlayGame() {
    this.router.navigate(['/game']);
  }

}
