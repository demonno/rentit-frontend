import { Component } from "@angular/core";
import { OrderCatalogService } from "app/sales/orders/orders-catalog.service";

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html'
    /*template: `
        <query-form (executeEventQuery)='executeQuery($event)'></query-form>
        <query-result (selectPlant)='selectPlant($event)'></query-result>
        <order-summary [order]='requisitionService.order' (createPO)='requisitionService.createPurchaseOrder()'></order-summary>
    `*/
})


export class OrdersComponent {

  constructor(private catalog: OrderCatalogService){}

  ngOnInit(): void {
    this.catalog.executeQuery();
  }

}