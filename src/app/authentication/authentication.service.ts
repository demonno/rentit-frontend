import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RequestOptions, Headers, Http } from "@angular/http";
import {Router} from '@angular/router';


import "rxjs/add/operator/map";

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class AuthenticationService {
  message: string;
  constructor(private http: Http, private _router: Router) {}

  login(username: string, password: string){
        this.authenticate(username, password)
      .subscribe(result => {
        if(result.username != null && result.username != undefined) {
          localStorage.setItem("user",result.username);
          localStorage.setItem("role",result.role);
          this._router.navigate(['query']);
        }else {
            this.message = "Incorrect Username or Password";
        }
      }, error =>  this.message = <any>error)
  }


  authenticate(username: string, password: string) {
      localStorage.setItem('code', btoa(username + ':' + password));
      const options = new RequestOptions({headers: this.headers()});
      let request =  this.http.get('http://localhost:3000/api/auth',options)
        .map(response => response.json());
      return request;
    }

    headers() {
      const value = new Headers();
      const code = localStorage.getItem('code');
      if (!!code) {
        value.set('Authorization', `Basic ${code}`);
      }
      return value;
    }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    this._router.navigate(['login']);
  }
 

}
