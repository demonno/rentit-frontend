import { Component } from "@angular/core";
import { DeliveryService } from "app/sales/delivery/delivery-service";
import { AuthenticationService } from "app/authentication/authentication.service";
import { Query } from "app/sales/definitions";

@Component({
    selector: 'delivery',
    templateUrl: './delivery.component.html'
    /*template: `
        <query-form (executeEventQuery)='executeQuery($event)'></query-form>
        <query-result (selectPlant)='selectPlant($event)'></query-result>
        <order-summary [order]='requisitionService.order' (createPO)='requisitionService.createPurchaseOrder()'></order-summary>
    `*/
})


export class DeliveryComponent {
constructor(private catalog: DeliveryService, private auth: AuthenticationService){}
    query: Query = new Query();

    ngOnInit(){
        this.auth.checkCredentials();
    }


 search(query: Query): void {
     this.catalog.executeQuery(query);
 }

}