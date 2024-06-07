export class Casos {
    _id?:number;
    codigo: string;
    titulo: string;
    incidencia?: any[];
    estado: string;


    constructor(codigo: string, titulo: string, incidencia: String[], estado: string){
        this.codigo = codigo;
        this.titulo = titulo;
        this.incidencia = incidencia;
        this.estado = estado;
    }

}