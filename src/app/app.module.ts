import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PlantCatalogService } from "app/sales/requisition/plant-catalog.service";
import { QueryResultComponent } from "app/sales/requisition/query-result.component";
import { QueryFormComponent } from "app/sales/requisition/query-form.component";
import { RequisitionComponent } from "app/sales/requisition/requisition.component";
import { OrdersComponent } from "app/sales/orders/orders.component";
import { SearchComponent } from "app/sales/search/search.component";
import { RequisitionService } from "app/sales/requisition/requisition.service";
import { OrderCatalogService } from "app/sales/orders/orders-catalog.service";
import { PlantSearchService } from "app/sales/search/plant-search.service";
import { OrderSummaryComponent } from "app/sales/requisition/order-summary.component";
import {DeliveryComponent} from "app/sales/delivery/delivery.component";
import {DeliveryService} from "app/sales/delivery/delivery-service";
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthenticationService} from "app/authentication/authentication.service"
import {MaintenanceService} from "app/maintenance/maintenance-service";
import {MaintenanceComponent} from "app/maintenance/maintenance.component";
import {PlanMaintenanceComponent} from "app/maintenance/plan-maintenance.component";
import {MaintenancePlansViewComponent} from "app/maintenance/plans/view/maintenance-plans-view"
import {MaintenancePlanService} from "app/maintenance/plans/maintenance-plan-service"

const appRoutes: Routes = [
  {path: 'query', component: RequisitionComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'search', component: SearchComponent},
  {path: 'delivery', component: DeliveryComponent },
  {path: 'login', component: AuthenticationComponent },
  {path: 'maintenance', component: MaintenanceComponent },
  {path: 'maintenance/plans', component: MaintenancePlansViewComponent },
  {path: 'plan-maintenance/:id/:href', component: PlanMaintenanceComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QueryResultComponent,
    QueryFormComponent,
    RequisitionComponent,
    OrderSummaryComponent,
    OrdersComponent,
    SearchComponent,
    DeliveryComponent,
    AuthenticationComponent,
    MaintenanceComponent,
    PlanMaintenanceComponent,
    MaintenancePlansViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PlantCatalogService,
    RequisitionService,
    OrderCatalogService,
    PlantSearchService,
    DeliveryService,
    AuthenticationService,
    MaintenanceService,
    MaintenancePlanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
