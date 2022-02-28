import { IAddress } from "./address.interface";

export interface IUser {
    name: {
        title: string,
        first: string,
        last: string
    };
    email: string;
    dob: {
        date: string,
        age: number
    };
    gender: string;
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    };
    id: number;
    addresses?: IAddress[]
}