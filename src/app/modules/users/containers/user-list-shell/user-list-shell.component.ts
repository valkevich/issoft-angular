import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/modules/shared/interfaces/card.interface';
import { FavoriteService } from 'src/app/modules/shared/services/favorite.service';
import { MapToCardService } from 'src/app/modules/shared/services/map-to-card.service';
import { IUser } from '../../interfaces/users.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss']
})
export class UserListShellComponent implements OnInit {
  public users: IUser[] = [];
  public usersDataForCards: ICard[] = [];
  public type: string = 'users';
  public favorites: ICard[] = [];

  constructor(private userService: UserService, private mapToCardService: MapToCardService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    const users = this.userService.getUsers();
    users.subscribe((users: IUser[]) => {
      this.users = users;
      this.usersDataForCards = this.mapToCardService.mapUsersToCards(this.users);
    })
    this.getFavoritesUserCards();
  }

  public getFavoritesUserCards(): void {
    const favorites = this.favoriteService.getFavorites(this.type);
    favorites.subscribe((favorites: ICard[]) => this.favorites = favorites);
  }

  public changeFavoriteStatus(card: ICard): void {
    this.favoriteService.changeFavoriteStatus(card, this.type);
    this.getFavoritesUserCards();
  }

}
