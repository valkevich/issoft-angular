import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/users.interface';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  @Output() onAddUser = new EventEmitter<IUser>();

  public usersGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    photo: new FormControl('')
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
    const user = this.usersGroup.value;
    this.onAddUser.emit(user);
  }
}
