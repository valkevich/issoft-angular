import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CardComponent } from 'src/app/components/card/card.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';



@NgModule({
  declarations: [CardComponent, NavbarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [CardComponent, NavbarComponent]
})

export class SharedModule { }
