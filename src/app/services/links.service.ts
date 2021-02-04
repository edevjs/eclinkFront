import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  getLinks () {
    return this.http.get<any>('http://localhost:3000/api/links')
    .pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      console.log(data)
    });
  }
}
