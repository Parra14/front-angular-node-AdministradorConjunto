import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authServices: AuthService) { }

  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
     const tokenizeReq = req.clone({

      setHeaders: {
        Authorization: `Bearer ${this.authServices.getToken()}`
      }

    })
    return next.handle(tokenizeReq);
  }

  
}
