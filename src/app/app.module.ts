import { NavbarComponent } from './components/navbar/navbar.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsPageModule } from './pages/cards-page/cards-page.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormPageModule } from './pages/form-page/form-page.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardsPageModule,
    MatToolbarModule,
    MatTabsModule,
    FormPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
