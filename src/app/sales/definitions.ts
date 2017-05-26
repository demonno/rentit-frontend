export class Query {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export class MaintenanceQuery {
  plantHref: string;
  plantId: string;
  startDate: Date;
  endDate: Date;
  description: string;
  price:string;
}

export class PlantInventoryEntryDTO {
    _id: string;
    name: string;
    description: string;
    price: number;

}

export class PlantInventoryItemDTO {
    _id: string;
    serialNumber: string;
    equipmentCondition: string;
    plantInventoryentryDTO: PlantInventoryEntryDTO 
}


export class PlantReservationDTO {
  rentalPeriod: BusinessPeriod;
  plantInventoryItemDTO: PlantInventoryItemDTO;
  poId;
}

export class PlantInventoryEntry {
    _id: number;
    name: string;
    description: string;
    price: number;
    _links: {[rel: string]: Relation}
}

export class Relation {
    href: string;
}

export class BusinessPeriod {
  startDate: Date;
  endDate: Date;
}

export class PurchaseOrder {
  _id: string;
  address: string;
  email: string;
  plant: PlantInventoryEntry;
  rentalPeriod: BusinessPeriod;
  total: number;
  status: string;
}

export class PurchaseOrderDTO {
  _id: number;
  address: string;
  email: string;
  rentalPeriod: BusinessPeriod;
}