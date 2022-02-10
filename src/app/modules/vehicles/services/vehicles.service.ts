import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    photo: '../../../../../assets/images/vehicles/bmw.jpg',
    id: 1
  },
  {
    name: 'Nissan',
    color: 'green',
    releaseYear: 1998,
    number: '0959-VS5',
    photo: '../../../../../assets/images/vehicles/nissan.jpg',
    id: 2
  },
  {
    name: 'Volkswagen',
    color: 'white',
    releaseYear: 2017,
    number: '1241-KE2',
    photo: '../../../../../assets/images/vehicles/vw.jpg',
    id: 3
  },
  {
    name: 'Lamborghini',
    color: 'yellow',
    releaseYear: 2015,
    number: '7777-KK7',
    photo: '../../../../../assets/images/vehicles/lambo.jpg',
    id: 4
  }
  ];

  public getVehicles(): Observable<IVehicle[]> {
    return of(this.vehicles);
  }

  public addVehicle(vehicleData: IVehicle): Observable<IVehicle[]> {
    this.vehicles.push(vehicleData);
    return of(this.vehicles)
  }

}
