import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, finalize, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AppService {
  private userStore$ = new BehaviorSubject<any>([]);
  user$ = this.userStore$.asObservable();

  constructor(private httpClient: HttpClient) {
   
  }

  findAll() {
    this.httpClient
      .get<any>("https://jsonplaceholder.typicode.com/users")
      .pipe(
        tap(res => console.log(res)),
        map(res => this.userStore$.next(res))
      )
      .subscribe();
  }

  create(dto: any) {
    this.httpClient
      .post("https://jsonplaceholder.typicode.com/users", dto)
      .pipe(map(res => this.userStore$.value.push(res)))
      .subscribe();
  }
}
