import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-reservaciones',
  templateUrl: './listar-reservaciones.component.html',
  styleUrls: ['./listar-reservaciones.component.css']
})
export class ListarReservacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  obtenerReservaciones(){
    this._pcServices.getPC().subscribe(data => {
      console.log(data);
      this.listPC = data;
    }, error => {
      console.log(error);
    })
    
  }

}
