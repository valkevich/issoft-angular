import { Injectable } from '@angular/core';
import { ICard } from '../../shared/interfaces/card.interface';
import { IVehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {
  private vehicles: IVehicle[] = [{
    name: 'BMW',
    color: 'black',
    releaseYear: 2011,
    number: '8739-SV7',
    photo: '../../../../../assets/images/vehicles/bmw.jpg'
  },
  {
    name: 'Nissan',
    color: 'green',
    releaseYear: 1998,
    number: '0959-VS5',
    photo: '../../../../../assets/images/vehicles/nissan.jpg'
  },
  {
    name: 'Volkswagen',
    color: 'white',
    releaseYear: 2017,
    number: '1241-KE2',
    photo: '../../../../../assets/images/vehicles/vw.jpg'
  },
  {
    name: 'Lamborghini',
    color: 'yellow',
    releaseYear: 2015,
    number: '7777-KK7',
    photo: '../../../../../assets/images/vehicles/lambo.jpg'
  }
  ];

  private editVehicleData(vehicleData: IVehicle): ICard {
    return {
      name: vehicleData.name,
      age: vehicleData.releaseYear,
      info: `Color: ${vehicleData.color}, number: ${vehicleData.number}`,
      photo: vehicleData.photo
    }
  }

  public getVehicles(): IVehicle[] {
    return this.vehicles;
  }

  public addVehicle(vehicleData: IVehicle): void {
    this.vehicles.push(vehicleData);
  }

  public createCardDataFromVehicles(): ICard[] {
    const editedData: ICard[] = []
    this.vehicles.forEach(vehicle => editedData.push(this.editVehicleData(vehicle)))
    return editedData;
  }

}
