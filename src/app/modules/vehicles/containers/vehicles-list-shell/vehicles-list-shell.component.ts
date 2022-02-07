import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/modules/shared/interfaces/card.interface';
import { IVehicle } from '../../interfaces/vehicle.interface';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss']
})
export class VehiclesListShellComponent implements OnInit {
  public vehicles: IVehicle[] = [];
  public vehiclesDataForCards: ICard[] = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicles = this.vehiclesService.getVehicles()
    this.vehiclesDataForCards = this.vehiclesService.createCardDataFromVehicles();
  }

}
