import { Injectable } from '@angular/core';

export interface IUser {
  name: string;
  age: number;
  activated: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private users: IUser[] = [{
    name: 'Nikita',
    age: 21,
    activated: true
  },
  {
    name: 'Svetlana',
    age: 16,
    activated: true
  },
  {
    name: 'Egor',
    age: 12,
    activated: true
  },
  {
    name: 'Maria',
    age: 34,
    activated: true
  },
  ]

  getUsers(): IUser[] {
    return this.users;
  }

  addUsers(userData: IUser) {
    this.users.push(userData);
  }
}


