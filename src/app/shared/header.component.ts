import { Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    :host {
      background: red;
    }
    .navbar {
      margin-bottom: 1.9em;
    }
    .btn {
      //padding: 0;
      //margin: 0.25rem 0.5rem;
      cursor: pointer;
    }
    #user-photo {
      height: 2.4em;
      margin-right: 1em;
    }
    @media screen and (min-width: 350px) {
      #login {
        margin-top: 1em;
      }
    }
    @media screen and (min-width: 992px) {
      #login {
        margin-top: 0;
      }
    }
  `]
})
export class HeaderComponent{

  currentUser = null;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(
      authUser => {
        console.log("AuthStatus changed:");
        console.log(authUser);
        this.currentUser = authUser
      }
    );
  };
}
