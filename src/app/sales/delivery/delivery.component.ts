import { Component } from "@angular/core";
import { DeliveryService } from "app/sales/delivery/delivery-service";
import { AuthenticationService } from "app/authentication/authentication.service";
import { OrderCatalogService } from "app/sales/orders/orders-catalog.service";
import { Query } from "app/sales/definitions";
import {Router} from '@angular/router';

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
constructor(private catalog: DeliveryService, private auth: AuthenticationService, private order: OrderCatalogService,private _router: Router){}
    statuses: Array<string> = ["Select","dispatched","delivered",'returned','rejected'];
    reservationId:string;
    query: Query = new Query();

    ngOnInit(){
        this.auth.checkCredentials();
    }

    onChange(value:string){
        this.dispatchAction(value);
    }


    dispatchAction(action:string){
        this.catalog.dispatch(this.reservationId,action);
    }

 viewDetails(id: string,reservationId:string){
     this.reservationId = reservationId;
     this.order.getPo(id);
 }

 search(query: Query): void {
     this.catalog.executeQuery(query);
     
 }

}