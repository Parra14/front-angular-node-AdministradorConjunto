import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PC } from 'src/app/models/pc';
import { PcServicesService } from 'src/app/services/pc-services.service';

@Component({
  selector: 'app-pc-create',
  templateUrl: './pc-create.component.html',
  styleUrls: ['./pc-create.component.css']
})
export class PCCreateComponent implements OnInit {

  pcForm: FormGroup;
  titulo = 'Crear PC';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _pcServicesService: PcServicesService,
    private aRouter: ActivatedRoute) {

    this.pcForm = this.fb.group({

      brand: ['', Validators.required],
      model: ['', Validators.required],
      serial: ['', Validators.required],
      pcType: ['', Validators.required],
      location: ['', Validators.required],
      cpu: ['', Validators.required],
      RAMSize: ['', Validators.required],
      hdd: ['', Validators.required],
      entryDate: ['', Validators.required],
      lowDate: ['', Validators.required],
      lastMaintenance: ['', Validators.required],

    })

    this.id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {

    this.esEditar();

  }

  agregarPC() {

    const pc: PC = {
      brand: this.pcForm.get('brand')?.value,
      model: this.pcForm.get('model')?.value,
      serial: this.pcForm.get('serial')?.value,
      pcType: this.pcForm.get('pcType')?.value,
      location: this.pcForm.get('location')?.value,
      cpu: this.pcForm.get('cpu')?.value,
      RAMSize: this.pcForm.get('RAMSize')?.value,
      hdd: this.pcForm.get('hdd')?.value,
      entryDate: this.pcForm.get('entryDate')?.value,
      lowDate: this.pcForm.get('lowDate')?.value,
      lastMaintenance: this.pcForm.get('lastMaintenance')?.value,
    }

    if (this.id !== null) {
      //editamos el producto
      this._pcServicesService.editarPC(this.id, pc).subscribe(data => {

        this.toastr.info('PC actualizado con Exito!!', 'PC Actualizado!')
        this.router.navigate(['/list-pc']);
      }, error => {
        console.log(error);
        this.pcForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear PC');
      })

    } else {
      //Agregamos Producto
      console.log(pc);
      this._pcServicesService.guardarPC(pc).subscribe(data => {
        this.toastr.success('PC guardado con Exito!!', 'PC registrado!');
        this.router.navigate(['/list-pc']);
      }, error => {
        console.log(error);
        this.pcForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear PC');
      })
    }
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'editar PC';
      this._pcServicesService.obtenerPC(this.id).subscribe(data => {
        console.log(data)
        this.pcForm.setValue({
          brand: data.brand,
          model: data.model,
          serial: data.serial,
          pcType: data.pcType,
          location: data.location,
          cpu: data.cpu,
          RAMSize: data.RAMSize,
          hdd: data.hdd,
          entryDate: data.entryDate,
          lowDate: data.lowDate,
          lastMaintenance: data.lastMaintenance,
        })
      })
    }

  }

}
