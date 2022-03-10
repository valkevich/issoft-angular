import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/users/services/users.service';
import { IUserInDataBase } from '../../interfaces/data-base-user.interface';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {
  public loginGroup: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginGroup = new FormGroup({});
  }

  private getUserData(): IUserInDataBase {
    const userData = Object.assign({}, this.loginGroup.controls['userLoginData'].value);
    return userData;
  }

  private isFormValid(): boolean {
    if (this.loginGroup.valid) {
      return true;
    }
    this.loginGroup.markAllAsTouched();
    return false;
  }

  public loginUser(): void {
    if (this.isFormValid()) {
      const userData = this.getUserData();
      this.userService.loginUser(userData.name, userData.password);
      this.router.navigate(['users']);
    }
  }

}
