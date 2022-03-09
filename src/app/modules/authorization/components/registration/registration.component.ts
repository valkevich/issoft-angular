import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserValidationService } from 'src/app/modules/users/services/user-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor(private userValidationService: UserValidationService) { }

  private passwordsAreEqual = (group: FormGroup): { [s: string]: boolean } | null => {
    return this.userValidationService.isPasswordsEqual(group.get('password').value, group.get('confirmPassword').value) ? null : { passwordAreEqual: true }
  }

  public passGroup: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  }, [this.passwordsAreEqual])

  public registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    passGroup: this.passGroup
  })

  ngOnInit(): void {
    this.parentFormGroup.addControl('userRegistrationData', this.registrationForm)
  }

}
