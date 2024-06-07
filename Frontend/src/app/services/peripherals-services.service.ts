import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peripherals } from '../models/peripherals';

@Injectable({
  providedIn: 'root'
})
export class PeripheralsServicesService {

  constructor(private http: HttpClient) { }

  getPeripherals(): Observable<any> {
    return this.http.get(environment.apiURL + '/get-Peripherals');
  }

  eliminarPeripherals(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/delete-Peripherals/' + id);
  }

  guardarPeripherals(peripherals: Peripherals): Observable<any> {
    return this.http.post(environment.apiURL + '/create-Peripherals', peripherals);
  }

  obtenerPeripherals(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/get-Peripherals/' + id);
  }

  editarPeripherals(id: string, peripherals: Peripherals): Observable<any> {
    return this.http.put(environment.apiURL + '/update-Peripherals/' + id, peripherals);
  }
}
