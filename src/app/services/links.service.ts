import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  @Output() textSearchEmitter: EventEmitter<string> = new EventEmitter();
  @Output() editLinkEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private api: ApiService
  ) { }

  getAllLinks(): Observable<any> {
    return this.api.get('/link');
  }

  saveLinks(payload) {
    return this.api.post('/link', payload);
  }

  search(text: string) {
    this.textSearchEmitter.emit(text);
  }

  editLink(link: any) {
    this.editLinkEmitter.emit(link);
  }

}
