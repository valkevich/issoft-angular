import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/modules/shared/interfaces/card.interface';
import { FavoriteService } from 'src/app/modules/shared/services/favorite.service';
import { MapToCardService } from 'src/app/modules/shared/services/map-to-card.service';
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
  public type: string = 'vehicles';
  public favorites: ICard[] = [];

  constructor(private vehiclesService: VehiclesService, private mapToCardService: MapToCardService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    const vehicles = this.vehiclesService.getVehicles();
    vehicles.subscribe((vehicles: IVehicle[]) => {
      this.vehicles = vehicles;
      this.vehiclesDataForCards = this.mapToCardService.mapVehiclesToCards(this.vehicles);
    });
    this.getFavoritesVehicleCards();
  }

  public getFavoritesVehicleCards(): void {
    const favorites = this.favoriteService.getFavorites(this.type);
    favorites.subscribe((favorites: ICard[]) => this.favorites = favorites);
  }
  
  public changeFavoriteStatus(card: ICard): void {
    this.favoriteService.changeFavoriteStatus(card, this.type);
    this.getFavoritesVehicleCards();
  }
}
