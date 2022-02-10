import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from 'src/app/modules/shared/interfaces/card.interface';
import { IVehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {
  @Input() vehicles: IVehicle[];
  @Input() favorites: ICard[];
  @Output() changeFavoriteStatusClick = new EventEmitter<ICard>();

  public onChangeFavoriteStatus(cardData: ICard): void {
    this.changeFavoriteStatusClick.emit(cardData)
  }
}
