import { Component, Output, EventEmitter } from "@angular/core";
import { PlantCatalogService } from "app/sales/requisition/plant-catalog.service";
import { PlantInventoryEntry } from "app/sales/definitions";

@Component({
    selector: 'query-result',
    templateUrl: './query-result.component.html'
})
export class QueryResultComponent {
    @Output() selectPlant: EventEmitter<PlantInventoryEntry> = new EventEmitter();

    constructor(private catalog: PlantCatalogService){}
}