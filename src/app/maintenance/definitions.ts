export class BusinessPeriod {
  startDate: Date;
  endDate: Date;
}

export class MaintenanceTaskDTO {
    _id: string;
    description: string;
    typeOfWork: string;
    price: string;
    schedule: BusinessPeriod;
    plantReservationHref: string;
}

export class MaintenancePlanDTO {
    _id: string;
    maintenanceTasks: MaintenanceTaskDTO[];
    yearOfAction: number;
    plantHref: string;
}
