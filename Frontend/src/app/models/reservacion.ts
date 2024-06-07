export class Reservacion {
    _id?:number;
    sitio: string;
    apto: string;
    residenteReserva: string;
    fechaReserva: Date;


    constructor(sitio: string, apto: string,  residenteReserva: string, fechaReserva: Date, ){
            
            this.sitio = sitio;
            this.apto = apto;
            this.residenteReserva = residenteReserva;
            this.fechaReserva = fechaReserva;
    }

}