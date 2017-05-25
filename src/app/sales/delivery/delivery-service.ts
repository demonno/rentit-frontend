import { Injectable } from "@angular/core";
import { PlantReservationDTO, Query } from "app/sales/definitions";
import { Http, URLSearchParams,RequestOptions, Headers} from "@angular/http";
import { environment } from "environments/environment"

@Injectable()
export class DeliveryService {
    plantReservations: Array<PlantReservationDTO> = [];

    constructor(private http: Http){}

    executeQuery(query: Query) {
        console.log("EXECUTING========");
        console.log(query);
        var params = new URLSearchParams();
        if(query.startDate) {
            params.set('date',query.startDate.toString());
        } 
        let headers = new Headers();
        headers.append("Authorization", "Basic c2VjdXJlOnNlY3VyZQ==");

        let options = new RequestOptions({ headers: headers });

        this.http
            .get(environment.RENTIT_BASE_URL + '/api/inventory/reservations', {params: params})
            .subscribe(response => {
            this.plantReservations = response.json();
            console.log(this.plantReservations);
            });
    }
}
