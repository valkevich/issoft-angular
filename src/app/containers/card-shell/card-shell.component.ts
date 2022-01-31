import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-shell',
  templateUrl: './card-shell.component.html',
  styleUrls: ['./card-shell.component.scss'],
  providers: [UserService]
})


export class CardShellComponent implements OnInit {
  @ViewChild(CardComponent, {static: false})
  private Card: CardComponent | undefined;

  users: IUser[] = [];
  hiddenCardsShown = true;

  constructor(private userService: UserService) { }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers()
  }

  // cardsHandler() {
  //   this.hiddenCardsShown = !this.hiddenCardsShown;
  // }

  cardsHandler() {
    this.Card?.changeUserStatus()
  }

  isAllCardsActive() {
    let allCardsAreActive = true
    this.users.forEach((user) => {
      if (user.activated === false) allCardsAreActive = false
    })
    return allCardsAreActive;
  }

}
