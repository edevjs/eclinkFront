import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(
    private api: ApiService
  ) { }

  getAllSections(): Observable<any> {
    return this.api.get('/section');
  }

  saveSections(payload) {
    return this.api.post('/section', payload);
  }

}
