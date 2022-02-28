import { Injectable } from '@angular/core';
import { delay, Observable, of, map, tap } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { IUser } from '../interfaces/users.interface';


@Injectable({
    providedIn: 'root'
})


export class UserService {

    constructor(private http: HttpService) { }

    private users: IUser[] ;

    public getUsers() {
        // this.http.getUsers();

        // return of(this.users).pipe(delay(500));
        return this.http.getUsers().pipe(
            map(users => {
                this.users = users
                return this.users;
            })
        )
    }

    public addUser(userData: IUser): void {
        // this.users.push(userData);
    }

    public generateId() {
        // return this.users[this.users.length - 1].id + 1;
    }

    public findUserById(id: number) {
        console.log(this.users);

        // return this.getUsers().pipe(
        //     map(users => users.find(user => user.id === id)),
        //     delay(1000)
        // )
    }

    public getSearchedUsers(value: string): Observable<IUser[]>{
        // return this.getUsers().pipe(
        //     map((users) => users.filter(user => user.firstName.toLowerCase().includes(value) || user.lastName.toLowerCase().includes(value)))
        // )
        return of(this.users.filter(user => user.name.first.toLowerCase().includes(value) || user.name.last.toLowerCase().includes(value)))

    }

    public editUser(newUserData: IUser): void {
        // this.users = this.users.map(user => user.id === newUserData.id ? newUserData : user);
    }
}


