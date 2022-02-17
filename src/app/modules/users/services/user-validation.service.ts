import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/users.interface';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(private userService: UserService) { }

  private getUsersEmails(): string[] {
    let emails: string[];
    this.userService.getUsers().subscribe((users: IUser[]) => {
      emails = users.map(user => user.email)
    })
    return emails;
  }

  public emailHasDomain(email: string): boolean {
    return email.includes('@gmail.com') ? true : false;
  }

  public emailIsUnique(email: string): Observable<ValidationErrors> {
    const userEmail = this.getUsersEmails().find(e => e === email);
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
