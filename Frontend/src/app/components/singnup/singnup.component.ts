import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authServices: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signup(){


    console.log(this.user)
   
    this.authServices.signUp(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private']);
      }, err=>console.log(err)
    )
  }

}
