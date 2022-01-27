import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageComponent } from './cards-page.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [CardsPageComponent, CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [CardsPageComponent],
  bootstrap: [CardsPageComponent]
})
export class CardsPageModule { }
