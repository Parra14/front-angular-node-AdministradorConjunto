export class Reservacion {
    _id?:number;
    sitio: string;
    apto: string;
    residenteReserva: string;
    fechaReserva: string;
    horaReserva: string;


    constructor(sitio: string, apto: string,  residenteReserva: string, fechaReserva: string, horaReserva: string){
            
            this.sitio = sitio;
            this.apto = apto;
            this.residenteReserva = residenteReserva;
            this.fechaReserva = fechaReserva;
            this.horaReserva = horaReserva;
    }

}