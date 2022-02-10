import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/users.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  @Output() onAddUser = new EventEmitter<IUser>();

  constructor(private userService: UserService) { }

  private emailIsUniqueValidator(control: FormControl): { [s: string]: boolean } | null {
    return control.value.includes('@gmail.com') ? null : { emailHasNotRightDomain: true }
  }

  private isFormValid(): boolean {
    return this.usersGroup.invalid ? false : true;
  }

  public usersGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
    gender: new FormControl('', Validators.required),
    department: new FormControl('', [Validators.required, Validators.min(6)]),
    company: new FormControl('', [Validators.required, Validators.max(35)]),
    photo: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, this.emailIsUniqueValidator]),
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


  public addUser(): void {
    if (this.isFormValid()) {
      const user: IUser = this.usersGroup.value;
      this.onAddUser.emit(user);
    }
  }
}
