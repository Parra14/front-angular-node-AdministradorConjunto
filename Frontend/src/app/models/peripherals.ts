export class Peripherals {
    _id?:number;
    brand: string;
    model: string;
    serial: string;
    periType: string;
    entryDate: string;
    lowDate?: string;


    constructor(brand: string, model: string, serial: string, periType: string,
        entryDate: string, lowDate: string){
            
            this.brand = brand;
            this.model = model;
            this.serial = serial;
            this.periType = periType;
            this.entryDate = entryDate;
            this.lowDate = lowDate;
    }

}