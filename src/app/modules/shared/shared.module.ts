import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [CardComponent, ModalWindowComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [CardComponent, ModalWindowComponent]
})

export class SharedModule { }
