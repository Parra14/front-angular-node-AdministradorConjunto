import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUsers: User[] = [];
  constructor(private _usersServicesService: UsersServicesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsers();
  }

  obtenerUsers() {
    this._usersServicesService.getusers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })

  }

  eliminarUser(id: any) {
    this._usersServicesService.deleteuser(id).subscribe(data => {
      this.toastr.error('El Usuario fue eliminado con exito', 'Usuario Eliminado');
      this.obtenerUsers();
    }, error => {
      console.log(error);
    })
  }

}
