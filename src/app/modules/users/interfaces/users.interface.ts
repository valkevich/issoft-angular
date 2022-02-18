import { IAddress } from "./address.interface";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    department: string;
    company: string;
    photo: string;
    id: number;
    addresses?: IAddress[]
}