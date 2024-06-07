import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usersForm: FormGroup;
  titulo = 'Crear Usuario';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _usersServicesService: UsersServicesService,
    private aRouter: ActivatedRoute) {
      this.usersForm = this.fb.group({

        name: ['', Validators.required],
        lastName: ['', Validators.required],
        rol: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required], 
        
      })

      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUser() {

    const user: User = {
      name: this.usersForm.get('name')?.value,
      lastName: this.usersForm.get('lastName')?.value,
      rol: this.usersForm.get('rol')?.value,
      email: this.usersForm.get('email')?.value,
      password: this.usersForm.get('password')?.value,
    }

    if (this.id !== null) {
      //editamos el producto
      this._usersServicesService.editarUser(this.id, user).subscribe(data => {

        this.toastr.info('Usuario actualizado con Exito!!', 'Usuario Actualizado!')
        this.router.navigate(['/list-users']);
      }, error => {
        console.log(error);
        this.usersForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear Usuario');
      })

    } else {
      //Agregamos Producto
      console.log(user);
      this._usersServicesService.createuser(user).subscribe(data => {
        this.toastr.success('Usuario guardado con Exito!!', 'Usuario registrado!');
        this.router.navigate(['/list-users']);
      }, error => {
        console.log(error);
        this.usersForm.reset();
        this.toastr.error('Uno de los campos no fue llenado correctamente', 'Error al crear Usuario');
      })
    }
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar Usuario';
      this._usersServicesService.getuser(this.id).subscribe(data => {
        this.usersForm.setValue({
          name: data.name,
          lastName: data.lastName,
          rol: data.rol,
          email: data.email,
          password: data.password,
        })
      })
    }

  }

}
