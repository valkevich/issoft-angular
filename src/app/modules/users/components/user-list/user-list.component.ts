import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: IUser[];
}
