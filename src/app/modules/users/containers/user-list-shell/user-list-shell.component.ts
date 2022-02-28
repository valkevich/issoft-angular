import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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
  public users: Observable<IUser[]>;
  public usersDataForCards: Observable<ICard[]>;
  public type: string = 'users';
  public favorites: ICard[] = [];

  constructor(private userService: UserService, private mapToCardService: MapToCardService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    this.usersDataForCards = this.users.pipe(
      map(users => this.mapToCardService.mapUsersToCards(users))
    )
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

  public searchUser(value: string) {
    this.usersDataForCards = this.mapToCardService.mapUsersToCards(this.userService.getSearchedUsers(value)) as Observable<ICard[]>
  }

}
