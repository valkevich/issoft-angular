import { IAddress } from "./address.interface";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    picture: string;
    id: number;
    age: number;
    addresses?: IAddress[]
    // name: {
    //     title: string,
    //     first: string,
    //     last: string
    // };
    // email: string;
    // dob: {
    //     date: string,
    //     age: number
    // };
    // gender: string;
    // picture: {
    //     large: string,
    //     medium: string,
    //     thumbnail: string
    // };
    // id: number;
    // addresses?: IAddress[];
    // location:
}