import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
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
        id: 1,
        addresses: [{
            addressLine: 'Chapaeva, 5',
            city: 'Minsk',
            zip: "223311"
        }]

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
        id: 2,
        addresses: [{
            addressLine: 'Chapaeva, 5',
            city: 'Minsk',
            zip: "223311"
        }]
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
        id: 3,
        addresses: [{
            addressLine: 'Chapaeva, 5',
            city: 'Minsk',
            zip: "223311"
        }]
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
        id: 4,
        addresses: [{
            addressLine: 'Chapaeva, 5',
            city: 'Minsk',
            zip: "223311"
        }]
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

    public findUserById(id: number): Observable<IUser> {
        let usersData: IUser;
        const users = this.getUsers();
        users.subscribe((users) => {
            usersData = users.find(user => user.id === id);
        })
        return of(usersData);
    }
}


