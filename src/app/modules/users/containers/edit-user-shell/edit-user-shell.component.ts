import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, merge, Observable, Subject, Subscription, switchMap, take } from 'rxjs';
import { IUser } from '../../interfaces/users.interface';
import { UserService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from 'src/app/modules/shared/components/modal-window/modal-window.component';
import { ModalService } from 'src/app/modules/shared/services/modal.service';
import { IModalData } from 'src/app/modules/shared/interfaces/modal-window.interfaces';


@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog, private modalService: ModalService) { }

  private modalWindowContent: IModalData = {
    data:
    {
      title: 'You have some unsaved changes, and will be lost.',
      content: 'Do you want to leave the page?',
      falseValueButton: 'No, stay here',
      trueValueButton: 'OK, let me out!'
    }
  }
  private saved: boolean = false;

  public editUserGroup: FormGroup;
  public id: number;

  private mergeNames(): Observable<string[]> {
    return merge(
      this.editUserGroup.controls['userData'].get('firstName').valueChanges.pipe(),
      this.editUserGroup.controls['userData'].get('lastName').valueChanges
    )
  }

  private generateUserEmail() {
    this.mergeNames().subscribe(() => {
      const firstName = this.editUserGroup.controls['userData'].get('firstName').value;
      const lastName = this.editUserGroup.controls['userData'].get('lastName').value;
      this.editUserGroup.controls['userData'].get('email').patchValue(`${firstName}${lastName}@gmail.com`);
    })
  }

  private setFormsValues(): void {
    this.userService.findUserById(this.id).subscribe(user => {
      const { addresses, ...userDetails } = user;
      this.editUserGroup.controls['userData'].patchValue(userDetails);
      this.editUserGroup.controls['addresses'].patchValue(addresses);
      this.generateUserEmail();
    });
  }

  private isFormValid(): boolean {
    if (this.editUserGroup.valid) {
      return true;
    }
    this.editUserGroup.markAllAsTouched();
    return false;
  }

  private getUserData(): IUser {
    const user = Object.assign({}, this.editUserGroup.controls['userData'].value);
    user.addresses = this.editUserGroup.controls['addresses'].value;
    return user;
  }

  private openModalWindow() {
    return this.dialog.open(ModalWindowComponent, this.modalWindowContent);
  }

  ngOnInit() {
    this.editUserGroup = new FormGroup({});
    this.route.paramMap.pipe(
      take(1),
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.id = +data;
        this.setFormsValues();
      })
  }

  public canDeactivate() {
    this.openModalWindow();
    return this.modalService.navigateAwaySelection$
  }

  public hasUnsavedData(): boolean {
    return this.saved ? false : this.editUserGroup.dirty;

  }

  public editUser(): void {
    if (this.isFormValid()) {
      this.saved = true;
      this.userService.editUser(this.getUserData());
      this.router.navigate(['']);
    }
  }

}
