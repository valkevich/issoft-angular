import { Component, OnInit } from '@angular/core';

export interface IUser {
  name: string;
  age: number;
  activated: boolean;
}

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})


export class CardsPageComponent {

  users: IUser[] = [{
    name: 'Nikita',
    age: 21,
    activated: true
  },
  {
    name: 'Svetlana',
    age: 28,
    activated: true
  },
  {
    name: 'Egor',
    age: 34,
    activated: true
  },
  {
    name: 'Maria',
    age: 18,
    activated: true
  },
  ]

  hiddenCardsShown = true;

  cardsHandler() {
    this.hiddenCardsShown = !this.hiddenCardsShown;
  }

  isAllCardsActive() {
    let allCardsAreActive = true
    this.users.forEach((user) => {
      if(user.activated === false) allCardsAreActive = false
    })
    return allCardsAreActive;
  }

}
