import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Peripherals } from 'src/app/models/peripherals';
import { PeripheralsServicesService } from 'src/app/services/peripherals-services.service';


@Component({
  selector: 'app-peripherals-create',
  templateUrl: './peripherals-create.component.html',
  styleUrls: ['./peripherals-create.component.css']
})
export class PeripheralsCreateComponent implements OnInit {

  peripheralsForm: FormGroup;
  titulo = 'Crear Periférico';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _peripheralsServicesService: PeripheralsServicesService,
    private aRouter: ActivatedRoute) { 

      this.peripheralsForm = this.fb.group({

        brand: ['', Validators.required],
        model: ['', Validators.required],
        serial: ['', Validators.required],
        periType: ['', Validators.required], 
        entryDate: ['', Validators.required],
        lowDate: ['', Validators.required],
        
      })

      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarPeripherals() {

    const peripherals: Peripherals = {
      brand: this.peripheralsForm.get('brand')?.value,
      model: this.peripheralsForm.get('model')?.value,
      serial: this.peripheralsForm.get('serial')?.value,
      periType: this.peripheralsForm.get('periType')?.value,
      entryDate: this.peripheralsForm.get('entryDate')?.value,
      lowDate: this.peripheralsForm.get('lowDate')?.value,
    }

    if (this.id !== null) {
      //editamos el producto
      this._peripheralsServicesService.editarPeripherals(this.id, peripherals).subscribe(data => {

        this.toastr.info('Periférico actualizado con Exito!!', 'Periférico  Actualizado!')
        this.router.navigate(['/list-peripherals']);
      }, error => {
        console.log(error);
        this.peripheralsForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear Periférico');
      })

    } else {
      //Agregamos Producto
      console.log(peripherals);
      this._peripheralsServicesService.guardarPeripherals(peripherals).subscribe(data => {
        this.toastr.success('Perisferico guardado con Exito!!', 'Perisferico registrado!');
        this.router.navigate(['/list-peripherals']);
      }, error => {
        console.log(error);
        this.peripheralsForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear Periférico');
      })
    }
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar Periféricos';
      this._peripheralsServicesService.obtenerPeripherals(this.id).subscribe(data => {
        this.peripheralsForm.setValue({
          brand: data.brand,
          model: data.model,
          serial: data.serial,
          periType: data.periType,
          entryDate: data.entryDate,
          lowDate: data.lowDate,
        })
      })
    }

  }
}
