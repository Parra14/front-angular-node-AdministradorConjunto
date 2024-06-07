import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PC } from 'src/app/models/pc';
import { PcServicesService } from 'src/app/services/pc-services.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PCListComponent implements OnInit {
  listPC: PC[]=[];
  constructor(private _pcServices: PcServicesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPC();
  }

  obtenerPC(){
    this._pcServices.getPC().subscribe(data => {
      console.log(data);
      this.listPC = data;
    }, error => {
      console.log(error);
    })
    
  }
  
  eliminarPC(id: any){
    this._pcServices.eliminarPC(id).subscribe(data=>{
      this.toastr.error('El PC fue eliminado con exito', 'PC Eliminado');
      this.obtenerPC();
    }, error => {
      console.log(error);
    })
  }




}
