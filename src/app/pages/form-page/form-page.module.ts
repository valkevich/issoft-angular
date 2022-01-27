// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CardsPageComponent } from './cards-page.component';
// import { CardComponent } from 'src/app/components/card/card.component';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';

import { FormPageComponent } from "./form-page.component";
import { FormComponent } from "src/app/components/form/form.component";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[FormPageComponent, FormComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [FormPageComponent],
    bootstrap: [FormPageComponent]
})

export class FormPageModule {};