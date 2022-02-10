import { Injectable } from '@angular/core';
import { IUser } from '../../users/interfaces/users.interface';
import { IVehicle } from '../../vehicles/interfaces/vehicle.interface';
import { ICard } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class MapToCardService {

  constructor() { }

  private editUserData(userData: IUser): ICard {
    return {
      name: userData.firstName + ' ' + userData.lastName,
      age: userData.age,
      info: `Company: ${userData.company}, department: ${userData.department}, gender: ${userData.gender}, email: ${userData.email}`,
      photo: userData.photo,
      id: userData.id,
      favoriteStatus: false
    }
  }

  private editVehicleData(vehicleData: IVehicle): ICard {
    return {
      name: vehicleData.name,
      age: vehicleData.releaseYear,
      info: `Color: ${vehicleData.color}, number: ${vehicleData.number}`,
      photo: vehicleData.photo,
      id: vehicleData.id,
      favoriteStatus: false
    }
  }

  public mapUsersToCards(users: IUser[]): ICard[] {
    return users.map(user => this.editUserData(user));
  }

  public mapVehiclesToCards(vehicles: IVehicle[]): ICard[] {
    return vehicles.map(vehicle => this.editVehicleData(vehicle));
  }

}
