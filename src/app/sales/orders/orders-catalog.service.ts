import { Injectable } from "@angular/core";
import { PurchaseOrder, Query } from "app/sales/definitions";
import { Http, URLSearchParams} from "@angular/http";
import { environment } from "environments/environment"

@Injectable()
export class OrderCatalogService {

    pos: Array<PurchaseOrder> = [];
    po: PurchaseOrder;

    constructor(private http: Http){}

    executeQuery() {
        console.log("EXECUTING========");
        this.http
            .get(environment.RENTIT_BASE_URL + '/api/sales/orders')
            .subscribe(response => {
            this.pos = response.json();
            });
    }

    getPo(id:string){
                console.log("EXECUTING========");
        this.http
            .get(environment.RENTIT_BASE_URL + '/api/sales/orders/'+id)
            .subscribe(response => {
                console.log(response.json());
            this.po = response.json();
            });
    }
}
