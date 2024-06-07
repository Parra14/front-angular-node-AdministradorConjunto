import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CasosServicesService } from 'src/app/services/casos-services.service';
import { Casos } from 'src/app/models/casos';


@Component({
  selector: 'app-list-casos',
  templateUrl: './list-casos.component.html',
  styleUrls: ['./list-casos.component.css']
})
export class ListCasosComponent implements OnInit {
  listCasos: Casos[] = [];

  casosForm: FormGroup;
  titulo = 'Crear Caso';

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _casosServicesService: CasosServicesService,
    private aRouter: ActivatedRoute) {

      this.casosForm = this.fb.group({

        codigo: [''],
        titulo: ['', Validators.required],
        incidencia: [],
        estado: [''],
        
      })

     }

  ngOnInit(): void {
    this.obtenerCasos();
  }

  obtenerCasos() {
    this._casosServicesService.getCasos().subscribe(data => {
      console.log(data);
      this.listCasos = data;
    }, error => {
      console.log(error);
    })

  }

  eliminarCaso(id: any){
    this._casosServicesService.eliminarCaso(id).subscribe(data=>{
      this.toastr.error('El Caso fue eliminado con exito', 'Caso Eliminado');
      this.obtenerCasos();
    }, error => {
      console.log(error);
    })
  }

  agregarCaso() {

    const caso: Casos = {
      codigo: '',
      titulo: this.casosForm.get('titulo')?.value,
      incidencia: [],
      estado: 'Abierto',
    }

    console.log(caso);
    this._casosServicesService.guardarCaso(caso).subscribe(data => {
      this.toastr.success('Caso guardado con Exito!!', 'Caso registrado!');
      this.obtenerCasos();
    }, error => {
      console.log(error);
      this.casosForm.reset();
    })
  }

}
