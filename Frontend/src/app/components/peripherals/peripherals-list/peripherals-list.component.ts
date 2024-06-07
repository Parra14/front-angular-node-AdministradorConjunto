import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Peripherals } from 'src/app/models/peripherals';
import { PeripheralsServicesService } from 'src/app/services/peripherals-services.service';

@Component({
  selector: 'app-peripherals-list',
  templateUrl: './peripherals-list.component.html',
  styleUrls: ['./peripherals-list.component.css']
})
export class PeripheralsListComponent implements OnInit {
  listPeripherals: Peripherals[] = [];
  constructor(private _PeripheralsServicesService: PeripheralsServicesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.obtenerPeripherals();

  }

  obtenerPeripherals() {
    this._PeripheralsServicesService.getPeripherals().subscribe(data => {
      console.log(data);
      this.listPeripherals = data;
    }, error => {
      console.log(error);
    })

  }

  eliminarPeripherals(id: any) {
    this._PeripheralsServicesService.eliminarPeripherals(id).subscribe(data => {
      this.toastr.error('El periférico fue eliminado con exito', 'Periférico Eliminado');
      this.obtenerPeripherals();
    }, error => {
      console.log(error);
    })
  }

}
