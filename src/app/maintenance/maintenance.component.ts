import { Component } from "@angular/core";
import { DeliveryService } from "app/sales/delivery/delivery-service";
import { AuthenticationService } from "app/authentication/authentication.service";
import { MaintenanceService } from "app/maintenance/maintenance-service";
import { MaintenanceQuery } from "app/sales/definitions";
import {Router} from '@angular/router';

@Component({
    selector: 'maintenance',
    templateUrl: './maintenance.component.html'
    /*template: `
        <query-form (executeEventQuery)='executeQuery($event)'></query-form>
        <query-result (selectPlant)='selectPlant($event)'></query-result>
        <order-summary [order]='requisitionService.order' (createPO)='requisitionService.createPurchaseOrder()'></order-summary>
    `*/
})

export class MaintenanceComponent {
    constructor(private catalog: MaintenanceService, private router: Router){}
    maintenanceQuery: MaintenanceQuery = new MaintenanceQuery();

    ngOnInit(){
        this.catalog.getAllItems();
    }

    
  maintenance(id: string,xlink:string) {
    //   console.log(id);
    //   console.log(xlink);
    this.router.navigate(['plan-maintenance', id,xlink]);
  }


}