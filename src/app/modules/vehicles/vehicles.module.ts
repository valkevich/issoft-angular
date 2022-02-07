import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { VehiclesListShellComponent } from './containers/vehicles-list-shell/vehicles-list-shell.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesService } from './services/vehicles.service';


@NgModule({
    declarations: [
        VehiclesListComponent,
        VehiclesListShellComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
    ],
    exports: [
    ],
    providers: [VehiclesService],
    bootstrap: []
})
export class VehiclesModule { }
