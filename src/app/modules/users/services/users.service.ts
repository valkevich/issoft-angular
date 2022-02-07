import { Injectable } from '@angular/core';
import { ICard } from '../../shared/interfaces/card.interface';
import { IUser } from '../interfaces/users.interface';


@Injectable({
    providedIn: 'root'
})


export class UserService {
    private users: IUser[] = [{
        name: 'Nikita',
        age: 21,
        gender: 'male',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/cartman.png'
    },
    {
        name: 'Svetlana',
        age: 16,
        gender: 'female',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/wendy.png'
    },
    {
        name: 'Egor',
        age: 12,
        gender: 'male',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/kenny.png'
    },
    {
        name: 'Maria',
        age: 34,
        gender: 'female',
        department: 'FE',
        company: 'Issoft',
        photo: '../../../../../assets/images/marjorine.png'
    },
    ];

    private editUserData(userData: IUser): ICard {
        return {
            name: userData.name,
            age: userData.age,
            info: `Company: ${userData.company}, department: ${userData.department}, gender: ${userData.gender}`,
            photo: userData.photo
        }
    }

    public getUsers(): IUser[] {
        return this.users;
    }

    public addUser(userData: IUser): void {
        this.users.push(userData);
    }

    public createCardDataFromUsers(): ICard[] {
        const editedData: ICard[] = []
        this.users.forEach(user => editedData.push(this.editUserData(user)))
        return editedData;
    }
}


