import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  constructor(
    private http: HttpClient
  ) { }

  private store$ = new BehaviorSubject<any>([]);

  getAllLinks(): Observable<any> {
    const token = localStorage.getItem('token') || '';
    return this.http.get<any>(`${environment.base_url}/link`, {
        headers: {
          'x-token': token
        }
      });
  }

  saveLinks(payload) {
    const token = localStorage.getItem('token') || '';

    return this.http.post<any>(`${environment.base_url}/link`, payload, {
      headers: {
        'x-token': token
      }
    });
  }
}
