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

const appRoutes: Routes = [
  {path: 'query', component: RequisitionComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'search', component: SearchComponent},
  // {path: 'delivery', component: InvoicesComponent },
  {
    path: '',
    redirectTo: 'query',
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
    SearchComponent
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
    PlantSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
