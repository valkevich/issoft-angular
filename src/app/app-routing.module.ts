import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { LoginShellComponent } from './modules/authorization/containers/login-shell/login-shell.component';
import { RegistrationShellComponent } from './modules/authorization/containers/registration-shell/registration-shell.component';
import { AuthGuard } from './modules/authorization/guards/auth.guard';
import { VehiclesListShellComponent } from './modules/vehicles/containers/vehicles-list-shell/vehicles-list-shell.component';

const routes: Routes = [
  { path: '', component: LoginShellComponent },
  { path: 'registration', component: RegistrationShellComponent },
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule)},
  { path: 'vehicles', component: VehiclesListShellComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
