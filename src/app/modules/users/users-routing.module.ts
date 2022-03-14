import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShellComponent } from 'src/app/core/containers/main-shell/main-shell.component';
import { UserCompanyInfoComponent } from './components/user-company-info/user-company-info/user-company-info.component';
import { UserContactsComponent } from './components/user-contacts/user-contacts/user-contacts.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info/user-personal-info.component';
import { AddUserFormShellComponent } from './containers/add-user-form-shell/add-user-form-shell.component';
import { CurrentUserInfoShellComponent } from './containers/current-user-info-shell/current-user-info-shell/current-user-info-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { UserListShellComponent } from './containers/user-list-shell/user-list-shell.component';
import { EditUserFormDeactivateGuard } from './guards/edit-user-form-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      { path: 'all-users', component: UserListShellComponent },
      { path: 'add-user', component: AddUserFormShellComponent },
      {
        path: 'edit-user/:id',
        component: EditUserShellComponent,
        canDeactivate: [EditUserFormDeactivateGuard]
      },
      {
        path: 'info',
        component: CurrentUserInfoShellComponent,
        children: [
          { path: 'company', component: UserCompanyInfoComponent },
          { path: 'personal', component: UserPersonalInfoComponent },
          { path: 'contacts', component: UserContactsComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
