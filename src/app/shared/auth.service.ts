import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {User} from "./user.model";

// Tell TypeScript about this variable "quick and dirty" instead of installing actual firebase component with npm
declare var firebase: any;

@Injectable()
export class AuthService {

  private provider = new firebase.auth.GoogleAuthProvider();

  public currentUser: User;

  constructor(private router: Router) {}

  signUpUser(user: User){
    // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }

  signInUser() {
    //firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    firebase.auth().signInWithPopup(this.provider)
      .then((result) => {
        this.currentUser = new User(result.user.displayName, result.user.photoURL);
        console.log("Successfully logged in with Google: " + result.user)
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logout() {
    firebase.auth().signOut(); // token aus LocalStorage löschen
    this.currentUser = null;
    //this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    const state = new Subject<User>(); // "flexible Variable", ähnlich Observable, aber aktiv nicht nur passiv (auch ändern)
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        state.next(new User(user.displayName, user.photoURL));
      } else {
        state.next(null);
      }
    });
    return state.asObservable();
  }
}
