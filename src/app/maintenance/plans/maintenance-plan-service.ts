import { Injectable } from "@angular/core";
import { MaintenancePlanDTO } from "app/maintenance/definitions";
import { Http, URLSearchParams,RequestOptions, Headers} from "@angular/http";
import { environment } from "environments/environment"

@Injectable()
export class MaintenancePlanService {

    constructor(private http: Http){}
    maintenancePlans: Array<MaintenancePlanDTO>;
      getAllItems(){
          console.log("EXECUTING========");
          this.http.get(environment.MAINTENANCE_BASE_URL + '/api/maintenance/plans')
          .subscribe(response => {
            console.log(response.json());
            this.maintenancePlans = response.json();
          });


    }

}
