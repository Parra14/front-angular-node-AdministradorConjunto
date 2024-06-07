export class PC {
    _id?:number;
    brand: string;
    model: string;
    serial: string;
    pcType: string;
    location: string;
    cpu: string;
    RAMSize: string;
    hdd: string;
    entryDate: Date;
    lowDate: Date;
    lastMaintenance: Date;


    constructor(brand: string, model: string, serial: string, pcType: string,
        location: string, cpu: string, RAMSize: string, hdd: string,
        entryDate: Date, lowDate: Date, lastMaintenance: Date,){
            
            this.brand = brand;
            this.model = model;
            this.serial = serial;
            this.pcType = pcType;
            this.location = location;
            this.cpu = cpu;
            this.RAMSize = RAMSize;
            this.hdd = hdd;
            this.entryDate = entryDate;
            this.lowDate = lowDate;
            this.lastMaintenance = lastMaintenance;
    }

}