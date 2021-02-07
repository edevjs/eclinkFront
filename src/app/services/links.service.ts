import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.http
      .get<any>("https://eclink2.herokuapp.com/api/link");
  }
}
