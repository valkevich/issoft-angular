import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { AddUserFormShellComponent } from './modules/users/containers/add-user-form-shell/add-user-form-shell.component';
import { UserListShellComponent } from './modules/users/containers/user-list-shell/user-list-shell.component';
import { VehiclesListShellComponent } from './modules/vehicles/containers/vehicles-list-shell/vehicles-list-shell.component';

const routes: Routes = [
  { path: '', component: UserListShellComponent },
  { path: 'add-user', component: AddUserFormShellComponent },
  { path: 'vehicles', component: VehiclesListShellComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
