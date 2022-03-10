import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/users/services/users.service';
import { IRegistrationData } from '../../interfaces/registration-data.interface';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {

  public registrationGroup: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registrationGroup = new FormGroup({});
  }

  private getUserData(): IRegistrationData {
    const userData = Object.assign({}, this.registrationGroup.controls['userRegistrationData'].value);
    return userData;
  }

  private isFormValid(): boolean {
    if (this.registrationGroup.valid) {
      return true;
    }
    this.registrationGroup.markAllAsTouched();
    return false;
  }

  public registerUser() {
    if(this.isFormValid()) {
      this.userService.addUserInDataBase(this.getUserData());
      this.router.navigate(['']);
    }
  }
}
