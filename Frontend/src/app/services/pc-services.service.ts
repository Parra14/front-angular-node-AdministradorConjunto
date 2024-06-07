import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PC } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class PcServicesService {

  constructor(private http: HttpClient) { }

  getPC(): Observable<any> {
    return this.http.get(environment.apiURL + '/get-pcs');
  }

  eliminarPC(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/delete-pc/' + id);
  }

  guardarPC(pc: PC): Observable<any> {
    return this.http.post(environment.apiURL + '/create-pc', pc);
  }

  obtenerPC(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/get-pcs/' + id);
  }

  editarPC(id: string, pc: PC): Observable<any> {
    return this.http.put(environment.apiURL + '/update-pc/' + id, pc);
  }
}
