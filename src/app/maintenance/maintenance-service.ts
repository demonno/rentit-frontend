import { Injectable } from "@angular/core";
import { PlantReservationDTO, Query, PlantInventoryItemDTO } from "app/sales/definitions";
import { Http, URLSearchParams,RequestOptions, Headers} from "@angular/http";
import { environment } from "environments/environment"

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

}