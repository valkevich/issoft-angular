import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  public pageSlice: Observable<ICard[]>;

  constructor(private userService: UserService, private mapToCardService: MapToCardService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    this.usersDataForCards = this.users.pipe(map(users => this.mapToCardService.mapUsersToCards(users)))
    this.pageSlice = this.usersDataForCards.pipe(map(cards => cards.slice(0, 8)))
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
    this.pageSlice = this.userService.getSearchedUsers(value).pipe(
      map(users => this.mapToCardService.mapUsersToCards(users))
    )
  }

  public onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > 50) {
      endIndex = 50;
    }
    this.pageSlice = this.usersDataForCards.pipe(map(cards => cards.slice(startIndex, endIndex)))
  }

}
