import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {User} from "../models/user.model";

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

  currentUser: User;

  constructor(private authService: AuthService) {
    this.authService.currentUserObservable.subscribe(
      authUser => {
        this.currentUser = authUser;
      }
    );
  };

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
