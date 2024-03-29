import { Component } from '@angular/core';
import { Query } from "app/sales/definitions";
import { PlantCatalogService } from "app/sales/requisition/plant-catalog.service";
import { AuthenticationService } from "app/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthenticationService){}

  logout() {
    this.auth.logout();
  }
}
