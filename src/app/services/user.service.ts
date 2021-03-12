import { ApiService } from './api.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) { }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${environment.base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    })
      .pipe(
        map( (resp: any) => {
          localStorage.setItem('token', resp.token);
          return true;
        }),
        catchError( error => of(false) )
      );
  }

  createUser( formData: RegisterForm ){
    console.log('createUser');
    return this.http.post(`${environment.base_url}/user`, formData).pipe(tap( (resp: any) => {
      localStorage.setItem('token', resp.token);
    }));
  }


  loginUser( formData: LoginForm ) {
    return this.http.post(`${environment.base_url}/login`, formData)
      .pipe(tap( (resp: any) => {
        localStorage.setItem('token', resp.token);
      }));
  }

  loginGoogle( token ) {
    return this.http.post(`${environment.base_url}/login/google`, { token })
      .pipe(tap( (resp: any) => {
        localStorage.setItem('token', resp.token);
      }));
  }


  getUser() {
    return this.api.get('/user');
  }



}
