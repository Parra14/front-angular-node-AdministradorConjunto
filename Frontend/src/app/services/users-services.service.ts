import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  constructor(private http: HttpClient) { }

  getusers(): Observable<any> {
    return this.http.get(environment.apiURL + '/get-users');
  }
  deleteuser(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/delete-user/' + id);
  }

  createuser(user: User): Observable<any> {
    return this.http.post(environment.apiURL + '/create-user', user);
  }

  getuser(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/get-user/' + id);
  }

  editarUser(id: string, user: User): Observable<any> {
    return this.http.put(environment.apiURL + '/update-user/' + id, user);
  }
}
