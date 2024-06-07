import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  errores: string[]=[];

  constructor(private authServices: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  signin(){
    console.log(this.user)
   
    this.authServices.signIn(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/list-pc']);

    }, err=>{
      this.errores = err.error.errors as string[];
      this.toastr.error('Usuario o contraseña Inválido', 'Error de autenticación');
     } 
    )
  }

}
