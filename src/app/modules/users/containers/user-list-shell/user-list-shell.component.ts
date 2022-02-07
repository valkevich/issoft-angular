import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/modules/shared/interfaces/card.interface';
import { IUser } from '../../interfaces/users.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss']
})
export class UserListShellComponent implements OnInit {
  public users: IUser[] = [];
  public usersDataForCards: ICard[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.usersDataForCards = this.userService.createCardDataFromUsers(); 
  }

}
