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


@NgModule({
    declarations: [
        UserListShellComponent,
        UserListComponent,
        AddUserFormShellComponent,
        AddUserFormComponent,
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
