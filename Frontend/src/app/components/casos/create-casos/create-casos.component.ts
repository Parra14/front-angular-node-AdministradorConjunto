import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Casos } from 'src/app/models/casos';
import { CasosServicesService } from 'src/app/services/casos-services.service';

@Component({
  selector: 'app-create-casos',
  templateUrl: './create-casos.component.html',
  styleUrls: ['./create-casos.component.css']
})
export class CreateCasosComponent implements OnInit {

  casosForm: FormGroup;
  titulo = 'Crear Caso';
  id: string | null;

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

      this.id = this.aRouter.snapshot.paramMap.get('id');

    }

  ngOnInit(): void {
  }

 //Este componente lo voy a eliminar porque no hace nada, osea ya hice
 //Esa misma funcionalidad en otro
 

}
