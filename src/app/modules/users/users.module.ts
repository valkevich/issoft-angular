import { NgModule } from '@angular/core';
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
import { UserSearchComponent } from './components/user-search/user-search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { FormatNamesPipe } from './pipes/format-names.pipe';
import { CurrentUserInfoShellComponent } from './containers/current-user-info-shell/current-user-info-shell/current-user-info-shell.component';
import { UserCompanyInfoComponent } from './components/user-company-info/user-company-info/user-company-info.component';
import { UserPersonalInfoComponent } from './components/user-personal-info/user-personal-info/user-personal-info.component';
import { UserContactsComponent } from './components/user-contacts/user-contacts/user-contacts.component';



@NgModule({
    declarations: [
        UserListShellComponent,
        UserListComponent,
        AddUserFormShellComponent,
        AddUserFormComponent,
        AddAddressesComponent,
        EditUserShellComponent,
        UserSearchComponent,
        FormatNamesPipe,
        CurrentUserInfoShellComponent,
        UserCompanyInfoComponent,
        UserPersonalInfoComponent,
        UserContactsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        UsersRoutingModule
    ],
    exports: [
        UserListShellComponent
    ],
    providers: [UserService],
    bootstrap: []
})
export class UsersModule { }
