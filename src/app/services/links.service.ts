import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  constructor(
    private api: ApiService
  ) { }


  // getAllLinks(): Observable<any> {
  //   const token = localStorage.getItem('token') || '';
  //   return this.http.get<any>(`${environment.base_url}/link`, {
  //       headers: {
  //         'x-token': token
  //       }
  //     });
  // }

  // saveLinks(payload) {
  //   const token = localStorage.getItem('token') || '';

  //   return this.http.post<any>(`${environment.base_url}/link`, payload, {
  //     headers: {
  //       'x-token': token
  //     }
  //   });
  // }


  getAllLinks(): Observable<any> {
    return this.api.get('/link');
  }

  saveLinks(payload) {
    return this.api.post('/link', payload);
  }
}
