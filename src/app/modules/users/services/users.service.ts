import { Injectable } from '@angular/core';
import { delay, Observable, of, map } from 'rxjs';
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
        return of(this.users).pipe(delay(500));
    }

    public addUser(userData: IUser): void {
        this.users.push(userData);
    }

    public generateId(): number {
        return this.users[this.users.length - 1].id + 1;
    }

    public findUserById(id: number): Observable<IUser> {
        return this.getUsers().pipe(
            map((users) => {
                return users.find(user => user.id === id)
            }),
            delay(1000)
        )
    }

    public editUser(newUserData: IUser) {
        this.findUserById(newUserData.id).pipe(
            map(user => {
                const index = this.users.indexOf(user);
                this.users.splice(index, 1, newUserData);
            })
        )
    }
}


