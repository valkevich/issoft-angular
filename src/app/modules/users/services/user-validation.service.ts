import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { map, Observable, of, take } from 'rxjs';
import { IUser } from '../interfaces/users.interface';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(private userService: UserService) { }

  private getUsersEmails(): Observable<string[]> {
    return this.userService.getUsers().pipe(
      take(1),
      map((users) => {
        return users.map(user => user.email)
      })
    )
  }

  public emailHasDomain(email: string): boolean {
    return email.includes('@gmail.com') ? true : false;
  }

  public emailIsUnique(email: string): Observable<ValidationErrors> {
    let userEmail: string;
    this.getUsersEmails().subscribe(emails => {
      userEmail = emails.find(emailFromDataBase => emailFromDataBase === email)
    })


    return new Observable<ValidationErrors>((observer) => {
      if (userEmail) {
        observer.next({ isEmailUnique: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    })
  }

}
