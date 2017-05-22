import { Injectable } from "@angular/core";
import { PlantInventoryEntry, Query } from "app/sales/definitions";
import { Http, URLSearchParams} from "@angular/http";

// http://localhost:3000/api/inventory/plants

@Injectable()
export class PlantCatalogService {

    plants: Array<PlantInventoryEntry> = [];

    constructor(private http: Http){}

    executeQuery(query: Query) {
        var params = new URLSearchParams();

        params.set('name', query.name);
        if (query.startDate)
            params.set('startDate', query.startDate.toString());
        if (query.endDate)
            params.set('endDate', query.endDate.toString());

        this.http
            .get('http://localhost:3000/api/inventory/plants', {search: params})
            .subscribe(response => this.plants = response.json());
    }
}