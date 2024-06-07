import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservacion } from 'src/app/models/reservacion';
import { reservacionServicesService } from 'src/app/services/reservacion-service.service';

@Component({
  selector: 'app-crear-reservacion',
  templateUrl: './crear-reservacion.component.html',
  styleUrls: ['./crear-reservacion.component.css']
})
export class CrearReservacionComponent implements OnInit {

  reservacionForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _reservacionServices: reservacionServicesService,
    private aRouter: ActivatedRoute) { 
      this.reservacionForm = this.fb.group({

        sitio: ['', Validators.required],
        apto: ['', Validators.required],
        residenteReserva: ['', Validators.required],
        fechaReserva: ['', Validators.required],
        horaReserva: ['', Validators.required]
  
      })
      }

  ngOnInit(): void {
  }

  agregarReservacion() {

    const reservacion: Reservacion = {
      sitio: this.reservacionForm.get('sitio')?.value,
      apto: this.reservacionForm.get('apto')?.value,
      residenteReserva: this.reservacionForm.get('residenteReserva')?.value,
      fechaReserva: this.reservacionForm.get('fechaReserva')?.value,
      horaReserva: this.reservacionForm.get('horaReserva')?.value,
    }


      //Agregamos Producto
      console.log(reservacion);
      this._reservacionServices.guardarReservacion(reservacion).subscribe(data => {
        this.toastr.success('Reserva guardada con Exito!!', 'Reserva registrada!');
        this.router.navigate(['/listar-reservacion']);
      }, error => {
        console.log(error);
        this.reservacionForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear Reserva');
      })
    
  }


}
