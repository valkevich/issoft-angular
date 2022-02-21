import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserListShellComponent } from './containers/user-list-shell/user-list-shell.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/users.service';
import { AddUserFormShellComponent } from './containers/add-user-form-shell/add-user-form-shell.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';


@NgModule({
    declarations: [
        UserListShellComponent,
        UserListComponent,
        AddUserFormShellComponent,
        AddUserFormComponent,
        AddAddressesComponent,
        EditUserShellComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatButtonModule
    ],
    exports: [
        UserListShellComponent
    ],
    providers: [UserService],
    bootstrap: []
})
export class UsersModule { }
