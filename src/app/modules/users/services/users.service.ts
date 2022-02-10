import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/users.interface';


@Injectable({
    providedIn: 'root'
})


export class UserService {
    private users: IUser[] = [{
        firstName: 'Nikita',
        lastName: 'Shelby',
        email: 'n.shelby@gmail.com',
        age: 21,
        gender: 'male',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/cartman.png',
        id: 1

    },
    {
        firstName: 'Svetlana',
        lastName: 'McConahy',
        email: 's.McConahy@gmail.com',
        age: 16,
        gender: 'female',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/wendy.png',
        id: 2
    },
    {
        firstName: 'Egor',
        lastName: 'Doe',
        email: 'e.doe@gmail.com',
        age: 12,
        gender: 'male',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/kenny.png',
        id: 3
    },
    {
        firstName: 'Maria',
        lastName: 'Hlose',
        email: 'm.hlose@gmail.com',
        age: 34,
        gender: 'female',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/marjorine.png',
        id: 4
    },
    ];

    public getUsers(): Observable<IUser[]> {
        return of(this.users)
    }

    public addUser(userData: IUser): Observable<IUser[]> {
        this.users.push(userData);
        return of(this.users)
    }

    public generateId(): number {
        return this.users[this.users.length - 1].id + 1;
    }
}


