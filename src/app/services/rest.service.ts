import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts').pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getpokedex(): Observable<object> {
    return this.http.get<object[]>('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100');
  }

}
