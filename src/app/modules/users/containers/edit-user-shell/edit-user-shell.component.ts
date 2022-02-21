import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { delay, Subscription, switchMap } from 'rxjs';
import { IUser } from '../../interfaces/users.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  public editUserGroup: FormGroup;
  public id: number;
  private routeSubscription: Subscription;
  private userSubscription: Subscription;

  private setFormsValues(): void {
    let userData: IUser;
    this.userSubscription = this.userService.findUserById(this.id).subscribe(user => userData = user);


    setTimeout(() => {
      const { addresses, ...userDetails } = userData;
      this.editUserGroup.controls['userData'].setValue(userDetails);
      this.editUserGroup.controls['addresses'].setValue(addresses);
    }, 0);
  }

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data)
    this.editUserGroup = new FormGroup({});
    this.setFormsValues()
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe;
    this.userSubscription.unsubscribe;
  }
}
