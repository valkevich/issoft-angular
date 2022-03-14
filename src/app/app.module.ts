import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from './modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';


import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { MainComponent } from './core/components/main/main.component';
import { MainShellComponent } from './core/containers/main-shell/main-shell.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundPageComponent,
    MainComponent,
    MainShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
    VehiclesModule,
    MatDialogModule,
    HttpClientModule,
    AuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
