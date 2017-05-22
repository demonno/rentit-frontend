export class Query {
  name: string;
  startDate: Date;
  endDate: Date;
}

export class PlantInventoryEntry {
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
  plant: PlantInventoryEntry;
  rentalPeriod: BusinessPeriod;
  total: number;
  status: string;
}