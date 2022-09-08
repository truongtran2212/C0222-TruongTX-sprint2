import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class User {
  id?: number;
  userName?: string;
  password?: string;
  isDeleted?: number;

  constructor(
    public status: string,
  ) {
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(username, password) {
    // username và password phải khớp với thuộc tình của class JwtRequest bên BE
    return this.httpClient.post<any>('http://localhost:8080/authenticate', {username, password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('userName', username);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          sessionStorage.getItem('grantList');
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
