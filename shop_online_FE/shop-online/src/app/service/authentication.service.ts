import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkLogin(): Observable<boolean> {
    return this.http.post<boolean>(API_URL + "/check/login", null);
  }

  isLogin(value: any) {
    if (this.isAdmin(value.grantList)) {
      sessionStorage.setItem("role", "ADMIN");
    } else {
      sessionStorage.setItem("role", "CUSTOMER");
    }
    sessionStorage.setItem("username", value.username);
  }

  isAdmin(grantList: string[]): boolean {
    return grantList.some(value => {
      return value === 'ADMIN';
    })
  }

  checkAdminRole(): Observable<string> {
    return this.http.post<string>(API_URL + "/role/admin", null);
  }
}
