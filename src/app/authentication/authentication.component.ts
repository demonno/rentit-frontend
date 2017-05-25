import {Component} from "@angular/core"
import {AuthenticationService} from "app/authentication/authentication.service"

@Component({
  selector: "login",
  template: `
  <input type="text" [(ngModel)]="username">
  <input type="password" [(ngModel)]="password">  
  <button (click)="login()"> Login </button>
  <div>{{authentication.message}}</div>
  `
})

export class AuthenticationComponent {
  username: string;
  password: string;
  constructor(private authentication: AuthenticationService) {}
  login() {
    console.log("Trying to login...");
    this.authentication.login(this.username,this.password);
  }
}
