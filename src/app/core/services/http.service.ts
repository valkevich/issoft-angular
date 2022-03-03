import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiUrl: string = 'https://randomuser.me/api/';


  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse | ErrorEvent | any): any {
    let message: string;
    let status: number;
    if (err.error instanceof ErrorEvent) {
      message = `An error occurred: ${err.error.message}`;
      status = err.status;
    } else {
      message = `Backend returned code ${err.status}: ${err.message}`;
      status = err.status;
    }
    console.log(message);

    const errorObj = { message, status };
    return throwError(errorObj)
  }

  public get(path: string): Observable<any> {
    const fullPath = this.apiUrl + path;
    return this.http.get(fullPath).pipe(catchError(this.handleError.bind(this)))
  }

  public post(path: string, data: any): Observable<any> {
    return this.http.post(this.apiUrl + path, data).pipe(catchError(this.handleError(this)))
  }
}
