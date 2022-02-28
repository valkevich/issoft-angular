import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=50&inc=gender,name,location,email,dob,picture')
      .pipe(
        map((users) => users['results'])
      )
  }
}
