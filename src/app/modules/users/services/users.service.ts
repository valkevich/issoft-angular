import { Injectable } from '@angular/core';
import { delay, Observable, of, map, tap } from 'rxjs';
import { DATABASE } from 'src/app/core/constants/constants';
import { HttpService } from 'src/app/core/services/http.service';
import { IUserInDataBase } from '../../authorization/interfaces/data-base-user.interface';
import { IRegistrationData } from '../../authorization/interfaces/registration-data.interface';
import { IAddress } from '../interfaces/address.interface';
import { IUser } from '../interfaces/users.interface';


@Injectable({
    providedIn: 'root'
})


export class UserService {

    constructor(private http: HttpService) { }

    private users: IUser[] = [];

    private mapToUserInterface(userData): IUser {
        return {
            firstName: userData.name.first,
            lastName: userData.name.last,
            gender: userData.gender,
            email: userData.email,
            picture: userData.picture.large,
            age: userData.dob.age,
            id: this.generateId(),
            addresses: [{
                country: userData.location.city,
                city: userData.location.country,
                postcode: userData.location.postcode
            }]
        };
    }

    public getUsers(): Observable<IUser[]> {
        return this.http.get('?results=50&inc=gender,name,location,email,dob,picture&seed=foobar').pipe(
            map(users => {
                users['results'].map(user => this.users.push(this.mapToUserInterface(user)))
                return this.users;
            })
        )
    }

    public addUser(userData: IUser): void {
        this.users.push(userData);
    }

    public generateId(): number {
        return this.users.length;
    }

    public findUserById(id: number): Observable<IUser> {
        return of(this.users.find(user => user.id === id)).pipe(delay(1000))
    }

    public getSearchedUsers(value: string): Observable<IUser[]> {
        return of(this.users.filter(user => user.firstName.toLowerCase().includes(value) || user.lastName.toLowerCase().includes(value)))
    }

    public editUser(newUserData: IUser): void {
        this.users = this.users.map(user => user.id === newUserData.id ? newUserData : user);
    }

    public getUsersFromDataBase(): IUserInDataBase[] {
        return JSON.parse(DATABASE.getItem('users'));
    }

    public addUserInDataBase(userData: IRegistrationData): void {
        const user: IUserInDataBase = {
            name: userData.name,
            password: userData.passGroup.password
        }
        const users: IUserInDataBase[] = this.getUsersFromDataBase();
        users.push(user)
        DATABASE.setItem('users', JSON.stringify(users))
    }

    public findUserInDB(userName: string, userPassword: string): IUserInDataBase | boolean {
        const users: IUserInDataBase[] = this.getUsersFromDataBase();
        return users.find(user => user.name === userName && user.password === userPassword);
    }

    public getCurrentUser() {
        return JSON.parse(DATABASE.getItem('currentUser'))
    }

    public loginUser(userName: string, userPassword: string): void {
        if (this.findUserInDB(userName, userPassword)) {
            DATABASE.setItem('currentUser', JSON.stringify(this.findUserInDB(userName, userPassword)));
        }
    }
}


