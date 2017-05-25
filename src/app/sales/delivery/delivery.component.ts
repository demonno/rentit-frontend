import { Component } from "@angular/core";
import { DeliveryService } from "app/sales/delivery/delivery-service";
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
    query: Query = new Query();

constructor(private catalog: DeliveryService){}

 search(query: Query): void {
     this.catalog.executeQuery(query);
 }

}