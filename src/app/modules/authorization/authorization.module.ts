import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginShellComponent,
    LoginComponent,
    RegistrationShellComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: []
})
export class AuthorizationModule { }
