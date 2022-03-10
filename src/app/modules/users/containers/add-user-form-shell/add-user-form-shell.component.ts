import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/users.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-add-user-form-shell',
  templateUrl: './add-user-form-shell.component.html',
  styleUrls: ['./add-user-form-shell.component.scss']
})
export class AddUserFormShellComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public addUserGroup: FormGroup;

  ngOnInit() {
    this.addUserGroup = new FormGroup({});
  }

  private isFormValid(): boolean {
    if (this.addUserGroup.valid) {
      return true;
    }
    this.addUserGroup.markAllAsTouched();
    return false;
  }

  private getUserData(): IUser {
    const user = Object.assign({}, this.addUserGroup.controls['userData'].value);
    user.addresses = this.addUserGroup.controls['addresses'].value;
    return user;
  }

  public addUser(): void {
    if (this.isFormValid()) {
      this.userService.addUser(this.getUserData());
      this.router.navigate(['users/all-users']);
    }
  }

}
