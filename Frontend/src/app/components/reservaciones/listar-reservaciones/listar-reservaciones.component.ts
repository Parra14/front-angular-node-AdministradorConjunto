import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Reservacion } from 'src/app/models/reservacion';
import { reservacionServicesService } from 'src/app/services/reservacion-service.service';

@Component({
  selector: 'app-listar-reservaciones',
  templateUrl: './listar-reservaciones.component.html',
  styleUrls: ['./listar-reservaciones.component.css']
})
export class ListarReservacionesComponent implements OnInit {
  listaReservaciones: Reservacion[]=[];

  constructor(private _reservacionService: reservacionServicesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  obtenerReservaciones(){
    this._reservacionService.getReservacion().subscribe(data => {
      console.log(data);
      this.listaReservaciones = data;
    }, error => {
      console.log(error);
    })
    
  }

  eliminarReservacion(id: any){
    this._reservacionService.eliminarReservacion(id).subscribe(data=>{
      this.toastr.error('la Reservacion fue eliminado con exito', 'Reservacio Eliminada');
      this.obtenerReservaciones();
    }, error => {
      console.log(error);
    })
  }

}
