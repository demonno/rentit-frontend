import { Component, Output, EventEmitter } from "@angular/core";
import { Query } from "app/sales/definitions";

@Component({
    selector: 'query-form',
    templateUrl: './query-form.component.html'  
})
export class QueryFormComponent {
    @Output() executeEventQuery: EventEmitter<Query> = new EventEmitter();

    query: Query = new Query();
}
