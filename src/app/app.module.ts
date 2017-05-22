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
import { RequisitionService } from "app/sales/requisition/requisition.service";
import { OrderSummaryComponent } from "app/sales/requisition/order-summary.component";

const appRoutes: Routes = [
  {path: 'query', component: RequisitionComponent},
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
    OrderSummaryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PlantCatalogService,
    RequisitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
