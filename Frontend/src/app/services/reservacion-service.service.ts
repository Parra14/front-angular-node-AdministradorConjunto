import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservacion } from '../models/reservacion';

@Injectable({
  providedIn: 'root'
})
export class reservacionServicesService {

  constructor(private http: HttpClient) { }

  getReservacion(): Observable<any> {
    return this.http.get(environment.apiURL + '/get-reservacions');
  }

  eliminarReservacion(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/delete-reservacion/' + id);
  }

  guardarReservacion(reservacion: Reservacion): Observable<any> {
    return this.http.post(environment.apiURL + '/create-reservacion', reservacion);
  }

  obtenerReservacion(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/get-reservacions/' + id);
  }

}
