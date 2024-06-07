import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Casos } from 'src/app/models/casos';
import { mensajes } from 'src/app/models/mensajes';
import { CasosServicesService } from 'src/app/services/casos-services.service';

@Component({
  selector: 'app-seguimiento-caso',
  templateUrl: './seguimiento-caso.component.html',
  styleUrls: ['./seguimiento-caso.component.css']
})
export class SeguimientoCasoComponent implements OnInit {

  casosForm: FormGroup;
  mensajes = {
    email: String,
    mensaje: String
  }
  listMensajes: mensajes[]=[];
  
  id: string | null;
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _casosServicesService: CasosServicesService,
    private aRouter: ActivatedRoute) {
      this.casosForm = this.fb.group({

        mensaje: ['', Validators.required],

      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.getCaso();
  }

  nuevoComentario(){
    const mensaje: mensajes = {

      mensaje: this.casosForm.get('mensaje')?.value,
    }
    if (this.id !== null) {
      //editamos el producto
      this._casosServicesService.editarCaso(this.id, mensaje).subscribe(data => {

        this.toastr.info('Seguimiento añadido con Exito!!', 'Caso Actualizado!')
        this.getCaso();
      }, error => {
        console.log(error);
        this.casosForm.reset();
      })

    }
    console.log(mensaje);

  }

  cerrarCaso(){
    if (this.id !== null) {
     
      this._casosServicesService.cerrarCaso(this.id).subscribe(data => {

        this.toastr.info('El caso se ha cerrado con Exito!!', 'Caso Actualizado!')
        this.getCaso();
        this.router.navigate(['/list-casos']);
      }, error => {
          console.log(error);
      })
    }
  }

  getCaso() {

    if (this.id !== null) {
     
      this._casosServicesService.obtenerCaso(this.id).subscribe(data => {
        console.log(data.incidencia);
        this.listMensajes = data.incidencia;
        console.log(this.listMensajes);
        
      }, error => {
          console.log(error);
      })
    }

  }
}
