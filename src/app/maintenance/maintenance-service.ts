import { Injectable } from "@angular/core";
import { PlantReservationDTO, Query, PlantInventoryItemDTO ,BusinessPeriod} from "app/sales/definitions";
import { Http, URLSearchParams,RequestOptions, Headers} from "@angular/http";
import { environment } from "environments/environment";
import { MaintenanceQuery } from "app/sales/definitions";

@Injectable()
export class MaintenanceService {

    constructor(private http: Http){}
    plantItems: Array<PlantInventoryItemDTO>;
        getAllItems(){
                console.log("EXECUTING========");
        this.http.get(environment.RENTIT_BASE_URL + '/api/inventory/plants/list/items')
            .subscribe(response => {
              console.log(response.json());
              this.plantItems = response.json();
            });
    }

    submitMaintenance(query:MaintenanceQuery){
       let obj = {
        "plantId":query.plantId,
        "price": query.price,
        "maintenancePeriod":
        {
            "startDate":query.startDate,
            "endDate":query.startDate,
        },
        "description":query.description,
        "plantHref": query.plantHref
}
        console.log("submitting");
        this.http.post(environment.MAINTENANCE_BASE_URL + `/api/maintenance`,obj)
        .subscribe(response => {
            console.log(response.json());
        });;
    }

}