import { Component } from "@angular/core";
import { Query, PlantInventoryEntry } from "app/sales/definitions";
import { PlantCatalogService } from "app/sales/requisition/plant-catalog.service";
import { RequisitionService } from "app/sales/requisition/requisition.service";

@Component({
    selector: 'requisition',
    templateUrl: './requisition.component.html'
    /*template: `
        <query-form (executeEventQuery)='executeQuery($event)'></query-form>
        <query-result (selectPlant)='selectPlant($event)'></query-result>
        <order-summary [order]='requisitionService.order' (createPO)='requisitionService.createPurchaseOrder()'></order-summary>
    `*/
})
export class RequisitionComponent {
    query: Query;
    plant: PlantInventoryEntry;

    isQueryTabActive = true;
    isResultTabActive = false;
    isSummaryTabActive = false;

    constructor(private catalog: PlantCatalogService, private requisitionService: RequisitionService) {}

    executeQuery(query: Query) {
        this.query = query;

        this.catalog.executeQuery(query);
        console.log(`Name: ${this.query.name}, start date ${this.query.startDate}`);

        this.isQueryTabActive = false;
        this.isResultTabActive = true;

    }

    selectPlant(plant: PlantInventoryEntry) {
        this.plant = plant;

        console.log(JSON.stringify(plant));
        this.requisitionService.setNewOrderInformation(this.plant, this.query);

        this.isResultTabActive = false;
        this.isSummaryTabActive = true;

    }
    selectTab(tab) {
        switch (tab) {
          case 1:
            this.isQueryTabActive = true;
            this.isResultTabActive = false;
            this.isSummaryTabActive = false;
            break;
          case 2:
            this.isQueryTabActive = false;
            this.isResultTabActive = true;
            this.isSummaryTabActive = false;
            break;
          case 3:
            this.isQueryTabActive = false;
            this.isResultTabActive = false;
            this.isSummaryTabActive = true;
            break;
          default:
            console.log('default');
        }
      }

    backToQueryTab() {
      this.isResultTabActive = false;
      this.isQueryTabActive = true;
    }


}
