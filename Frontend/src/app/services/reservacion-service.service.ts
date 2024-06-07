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
    return this.http.get(environment.apiURL + '/get-pcs');
  }

  eliminarReservacion(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/delete-pc/' + id);
  }

  guardarReservacion(reservacion: Reservacion): Observable<any> {
    return this.http.post(environment.apiURL + '/create-pc', reservacion);
  }

  obtenerReservacion(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/get-pcs/' + id);
  }

  editarReservacion(id: string, reservacion: Reservacion): Observable<any> {
    return this.http.put(environment.apiURL + '/update-pc/' + id, reservacion);
  }
}
