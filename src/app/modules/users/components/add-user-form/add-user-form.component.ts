import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserValidationService } from '../../services/user-validation.service';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor(private userService: UserService, private userValidationService: UserValidationService) { }

  ngOnInit(): void {
    this.parentFormGroup.addControl('userData', this.usersGroup);
  }

  private emailHasRightDomain = (control: FormControl): { [s: string]: boolean } | null => {
    return this.userValidationService.emailHasDomain(control.value) ? null : { emailHasRightDomain: true }
  }

  private emailIsUnique = (control: FormControl): Observable<ValidationErrors> => {
    return this.userValidationService.emailIsUnique(control.value);
  }

  public usersGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
    gender: new FormControl('', Validators.required),
    photo: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, this.emailHasRightDomain], [this.emailIsUnique]),
    id: new FormControl(this.userService.generateId())
  })


  public handleFileInput(event): void {
    const file = event[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.usersGroup.patchValue({
        photo: reader.result
      })
    }
  }
}
