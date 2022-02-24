import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard } from 'src/app/modules/shared/interfaces/card.interface';
import { IUser } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  @Input() users: IUser[];
  @Input() favorites: ICard[];
  @Output() changeFavoriteStatusClick = new EventEmitter<ICard>();

  public onChangeFavoriteStatus(cardData: ICard): void {
    this.changeFavoriteStatusClick.emit(cardData)
  }

}
