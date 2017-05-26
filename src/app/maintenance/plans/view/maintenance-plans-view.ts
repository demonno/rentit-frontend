import {Component, OnInit} from '@angular/core';
import {RequisitionService} from 'app/sales/requisition/requisition.service';
import {Router} from '@angular/router';
import {MaintenancePlanService} from 'app/maintenance/plans/maintenance-plan-service';

@Component({
  selector: 'app-maintenance-plans-view',
  templateUrl: './maintenance-plans-view.html',
  styleUrls: ['./style.css']
})
export class MaintenancePlansViewComponent implements OnInit {
  maintenancePlans = {};

  constructor(private router: Router, private maintenanceService: MaintenancePlanService) {
  }

  ngOnInit() {
    this.maintenanceService.getAllItems();
  }

  refresh() {
    this.maintenanceService.getAllItems();
  }

  backToHomepage() {
    // this.router.navigateByUrl('query');
  }

  goToDetails(id: string) {
    // this.router.navigate(['requests', id]);
  }

  accept(id: string) {
    // this.maintenanceService.acceptPHR(id).subscribe(response => {
      // this.refresh();
    // });
  }

  reject(id: string) {
    // this.maintenanceService.rejectPHR(id).subscribe(response => {
      // this.refresh();
    // });
  }

  update(id: string) {
    // this.router.navigate(['edit_requests', id]);
  }

}
