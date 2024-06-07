export class reservacion {
    _id?:number;
    brand: string;

    entryDate: Date;
    lowDate: Date;
    lastMaintenance: Date;


    constructor(brand: string, entryDate: Date, lowDate: Date, lastMaintenance: Date,){
            
            this.brand = brand;
            this.entryDate = entryDate;
            this.lowDate = lowDate;
            this.lastMaintenance = lastMaintenance;
    }

}