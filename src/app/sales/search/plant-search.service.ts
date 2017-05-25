import { Injectable } from "@angular/core";
import { PlantInventoryEntry, Query } from "app/sales/definitions";
import { Http, URLSearchParams} from "@angular/http";
import { environment } from "environments/environment"

@Injectable()
export class PlantSearchService {

    plant: PlantInventoryEntry = null;

    constructor(private http: Http){}

    executeQuery(query: Query) {
        var params = new URLSearchParams();
        this.http
            .get(environment.RENTIT_BASE_URL + '/api/inventory/plants/'+ query.id)
            .subscribe(response => {
                this.plant = response.json();
                console.log(this.plant);
            });
    }
}