import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../users/interfaces/users.interface';
import { ICard } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public favoritesCards: ICard[] = [];

  constructor() { }

  private addToFavorites(cardData: ICard, type: string): void {
    if (!(type in this.favoritesCards)) {
      this.favoritesCards[type] = [cardData];
    } else {
      if (!(this.favoritesCards[type].find(card => card.id === cardData.id))) this.favoritesCards[type].push(cardData)
    }
  }

  private deleteFromFavorites(cardData: ICard, type: string): void {
    const index = this.favoritesCards[type].indexOf(cardData);
    this.favoritesCards[type].splice(index, 1);
  }

  public getFavorites(type: string): Observable<ICard[]> {
    return of(this.favoritesCards[type]);
  }

  public changeFavoriteStatus(cardData: ICard, type: string): void {
    cardData.favoriteStatus ? this.deleteFromFavorites(cardData, type) : this.addToFavorites(cardData, type);
    cardData.favoriteStatus = !cardData.favoriteStatus;
  }
}
