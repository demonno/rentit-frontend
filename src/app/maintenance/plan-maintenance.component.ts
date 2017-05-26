import { Component } from "@angular/core";
import { DeliveryService } from "app/sales/delivery/delivery-service";
import { AuthenticationService } from "app/authentication/authentication.service";
import { MaintenanceService } from "app/maintenance/maintenance-service";
import { MaintenanceQuery } from "app/sales/definitions";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'plan-maintenance',
    templateUrl: './plan-maintenance.component.html'
    /*template: `
        <query-form (executeEventQuery)='executeQuery($event)'></query-form>
        <query-result (selectPlant)='selectPlant($event)'></query-result>
        <order-summary [order]='requisitionService.order' (createPO)='requisitionService.createPurchaseOrder()'></order-summary>
    `*/
})

export class PlanMaintenanceComponent {
    constructor(private catalog: MaintenanceService, private router: Router,
              private activatedRoute: ActivatedRoute){}

    maintenanceQuery: MaintenanceQuery = new MaintenanceQuery();


 submit(query:MaintenanceQuery){
     this.catalog.submitMaintenance(query);
 }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.maintenanceQuery.plantId = params['id'];
      this.maintenanceQuery.plantHref = params['href'];
    });
  }

    backToList(){
    this.router.navigateByUrl('maintenance');
  }

}