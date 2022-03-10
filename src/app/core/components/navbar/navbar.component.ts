import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserInDataBase } from 'src/app/modules/authorization/interfaces/data-base-user.interface';
import { UserService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private userService: UserService) { }

  public getCurrentUser(): string {
    const user = this.userService.getCurrentUser()
    return user ? user.name : '';
  }

}
