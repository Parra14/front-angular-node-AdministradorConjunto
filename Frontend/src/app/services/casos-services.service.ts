import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Casos } from '../models/casos';
import { mensajes } from '../models/mensajes';

@Injectable({
  providedIn: 'root'
})
export class CasosServicesService {

  constructor(private http: HttpClient) { }

  getCasos(): Observable<any> {
    return this.http.get(environment.apiURL + '/get-casos');
  }

  eliminarCaso(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/delete-caso/' + id);
  }

  guardarCaso(caso: Casos): Observable<any> {
    return this.http.post(environment.apiURL + '/create-caso', caso);
  }

  obtenerCaso(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/get-caso/' + id);
  }

  editarCaso(id: string, mensaje: mensajes): Observable<mensajes[]> {
    return this.http.put<mensajes[]>(environment.apiURL + '/update-caso/' + id, mensaje);
  }

  cerrarCaso(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/cerrar-caso/'+ id);
  }


}
