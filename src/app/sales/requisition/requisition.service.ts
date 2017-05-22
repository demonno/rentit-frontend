import { Injectable } from "@angular/core";
import { PurchaseOrder, PlantInventoryEntry, Query } from "app/sales/definitions";
import { Http } from "@angular/http";

import * as moment from "moment"

@Injectable()
export class RequisitionService {
    order: PurchaseOrder = new PurchaseOrder();

    constructor(private http: Http) {}

    setNewOrderInformation(plant: PlantInventoryEntry, query: Query) {
        this.order.plant = plant;
        this.order.rentalPeriod = {startDate: query.startDate, endDate: query.endDate};
        this.order.total = (moment(query.endDate).diff(moment(query.startDate), 'days') + 1) * plant.price;

        console.log("partial PurchaseOrder created");
        console.log(JSON.stringify(this.order));
    }

    createPurchaseOrder() {
        this.http
            .post('http://localhost:3000/api/sales/orders', this.order)
            .subscribe(response => console.log(response));
    }
}