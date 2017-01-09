import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  apiBaseUrl : string = 'http://localhost:9000/api/json';

  constructor (private http : Http) {}

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http
      .post('https://ude-angular2-http.firebaseio.com/data.json', body, {headers: headers})
      .catch((response: Response) => {
        // NO automatic Observable wrapping
        return Observable.throw(response.json());
    });
  }

  getData() {
    return this.http
      .get(this.apiBaseUrl)
      .map((response : Response) => { return response.json() })
  };
}
