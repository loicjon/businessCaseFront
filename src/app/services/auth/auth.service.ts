import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient, private jwtToken: JwtHelperService) { }

  login(credentials: User): Observable<any> {
    return this.http.post(this.apiUrl + 'authentication_token', {
      username: credentials.username,
      password: credentials.password
    });
  }

  // tslint:disable-next-line:ban-types
  saveUser(token: string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token})
    };

    return this.http.get(this.apiUrl + 'api/user', httpOptions);
  }

  public isAuthenticated(): boolean {
    const token =   window.sessionStorage.getItem('auth-token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtToken.isTokenExpired(token);
  }
}
