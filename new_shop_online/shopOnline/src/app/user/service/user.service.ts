import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../product/model/Product';
import {User} from '../model/user';
import {UserRole} from '../model/userRole';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  addNewUser(user: User): Observable<any> {
    return this.http.post<any>(API_URL + '/create', user);
  }

  addNewUserRole(userRole: UserRole): Observable<any> {
    return this.http.post<any>(API_URL + '/createUserRole', userRole);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/users');
  }
}
