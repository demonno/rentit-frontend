import { Injectable } from "@angular/core";
import { PurchaseOrder, PurchaseOrderDTO ,PlantInventoryEntry, Query} from "app/sales/definitions";
import { Http } from "@angular/http";

import * as moment from "moment"

@Injectable()
export class RequisitionService {
    order: PurchaseOrder = new PurchaseOrder();
    orderDTO: PurchaseOrderDTO = new PurchaseOrderDTO();

    constructor(private http: Http) {}

    setNewOrderInformation(plant: PlantInventoryEntry, query: Query) {
        this.order.plant = plant;
        this.order.rentalPeriod = {startDate: query.startDate, endDate: query.endDate};
        this.order.total = (moment(query.endDate).diff(moment(query.startDate), 'days') + 1) * plant.price;

        this.orderDTO._id = this.order.plant._id;
        this.orderDTO.rentalPeriod = this.order.rentalPeriod;
        this.orderDTO.address = "Kaubamaja 12";
        this.orderDTO.email = "CanisMajoris12@universe.com";
        console.log("partial PurchaseOrder created");
        
        console.log(JSON.stringify(this.orderDTO));
    }

    createPurchaseOrder() {
        this.http
            .post('http://localhost:3000/api/sales/orders', this.orderDTO)
            .subscribe(response => console.log(response));
    }
}