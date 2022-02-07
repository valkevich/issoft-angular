import { Component, Input, OnInit } from '@angular/core';
import { IVehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {
  @Input() vehicles: IVehicle[];
}
