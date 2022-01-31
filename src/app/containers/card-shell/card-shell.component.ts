import { Component, OnInit, ViewChildren } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-shell',
  templateUrl: './card-shell.component.html',
  styleUrls: ['./card-shell.component.scss'],
  providers: [UserService]
})


export class CardShellComponent implements OnInit {
  @ViewChildren(CardComponent)
  private cards: CardComponent[] | undefined;

  users: IUser[] = [];
  hiddenCardsShown = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  cardsHandler() {
    this.hiddenCardsShown = !this.hiddenCardsShown;
  }

  diactivateUsers() {
    this.cards?.forEach((card) => {
      card.diactivateUser();
    })
  }

  isAllCardsActive() {
    let allCardsAreActive = true
    this.users.forEach((user) => {
      if (user.activated === false) allCardsAreActive = false
    })
    return allCardsAreActive;
  }

}
