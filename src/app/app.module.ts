import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from './modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './modules/users/users.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthorizationModule } from './modules/authorization/authorization.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
    MatToolbarModule,
    UsersModule,
    VehiclesModule,
    MatDialogModule,
    HttpClientModule,
    AuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
