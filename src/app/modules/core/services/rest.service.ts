import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(
        map((response: Response) => response),
        catchError((error: any) => throwError(error || 'Server error'))
      );
  }
}
