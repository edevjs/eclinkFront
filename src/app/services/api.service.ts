import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  get(endpoint: string) {
    const token = localStorage.getItem('token') || '';
    return this.http.get<any>(`${environment.base_url}${endpoint}`, {
      headers: {
        'x-token': token
      }
    });
  }

  post(endpoint: string, payload: any): Observable<any> {
    const token = localStorage.getItem('token') || '';
    return this.http.post<any>(`${environment.base_url}${endpoint}`, payload, {
      headers: {
        'x-token': token
      }
    });
  }
}
