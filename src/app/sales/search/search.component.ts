import { Component, Output, EventEmitter } from "@angular/core";
import { Query } from "app/sales/definitions";
import { PlantSearchService } from "app/sales/search/plant-search.service";

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
    /*template: `
        <query-form (executeEventQuery)='executeQuery($event)'></query-form>
        <query-result (selectPlant)='selectPlant($event)'></query-result>
        <order-summary [order]='requisitionService.order' (createPO)='requisitionService.createPurchaseOrder()'></order-summary>
    `*/
})


export class SearchComponent {
    query: Query = new Query();

    constructor(private search: PlantSearchService) {}

    searchPlant(query: Query) {
        this.search.executeQuery(query);
        console.log("EXECUTING+=========");

    }

}