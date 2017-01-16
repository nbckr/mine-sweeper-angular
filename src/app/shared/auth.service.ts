import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user.model";
import { AngularFire, AuthProviders } from 'angularfire2';


@Injectable()
export class AuthService {

  // Generate an ID for this client to be used if he doesn't log in
  private defaultUser = new User(null, null, this.generateGUID(), false);

  // BehaviorSubject will return upon subscription the last value of the stream, or an initial state if no value was emitted yet
  private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(this.defaultUser);
  public currentUserObservable: Observable<User> = this._currentUserSubject.asObservable();

  constructor(public af: AngularFire) {

    this.af.auth.subscribe(response => {
      if(response) {
        // user logged in
        let userInfo: firebase.User = response.auth;
        this._currentUserSubject.next(new User(userInfo.displayName, userInfo.photoURL, userInfo.email, true)); // TODO this causes delay
        console.log("User logged in: " + userInfo.displayName);
      }
      else {
        // user not logged in
        this._currentUserSubject.next(this.defaultUser);
        console.log("User logged out.");
      }
    });
  }

  login(): void {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout(): void {
    this.af.auth.logout();
  }

  /**
   * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   */
  generateGUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
