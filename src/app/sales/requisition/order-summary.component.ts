import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PurchaseOrder } from "app/sales/definitions";

@Component({
    selector: "order-summary",
    templateUrl: "./order-summary.component.html"
})
export class OrderSummaryComponent {
    @Output() createPO: EventEmitter<null> = new EventEmitter();

    @Input() order: PurchaseOrder;
}