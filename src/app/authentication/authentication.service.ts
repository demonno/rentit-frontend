import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RequestOptions, Headers, Http } from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}

  authenticate(username: string, password: string): Observable<boolean> {
      localStorage.setItem('code', btoa(username + ':' + password));
      const options = new RequestOptions({headers: this.headers()});
      return this.http.get('http://localhost:3000/api/inventory/reservations')
        .map(response => response.json());
    }

    headers() {
      const value = new Headers();
      const code = localStorage.getItem('Code');
      if (!!code) {
        value.set('Authorization', `Basic ${code}`);
      }
      return value;
    }

}
