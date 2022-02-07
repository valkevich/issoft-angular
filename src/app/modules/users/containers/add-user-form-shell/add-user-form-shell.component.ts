import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-add-user-form-shell',
  templateUrl: './add-user-form-shell.component.html',
  styleUrls: ['./add-user-form-shell.component.scss']
})
export class AddUserFormShellComponent {

  constructor(private userService: UserService, private router: Router) { }

  public addUser(user) {
    this.userService.addUser(user)
    this.router.navigate([''])
  }
}
