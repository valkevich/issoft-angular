import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authorization/guards/auth.guard';
import { AddUserFormShellComponent } from './containers/add-user-form-shell/add-user-form-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { UserListShellComponent } from './containers/user-list-shell/user-list-shell.component';
import { EditUserFormDeactivateGuard } from './guards/edit-user-form-deactivate.guard';

const routes: Routes = [
  { path: 'all-users', component: UserListShellComponent, canActivate: [AuthGuard] },
  { path: 'add-user', component: AddUserFormShellComponent, canActivate: [AuthGuard] },
  {
    path: 'edit-user/:id',
    component: EditUserShellComponent,
    canLoad: [AuthGuard],
    canDeactivate: [EditUserFormDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
