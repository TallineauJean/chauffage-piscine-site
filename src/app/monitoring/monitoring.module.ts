import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitoringComponent} from './monitoring.component';
import {MonitoringRoutingModule} from "./monitoring-routing.module";
import {CapteurTemperatureComponent} from './capteur-temperature/capteur-temperature.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";
import {TemperaturePipe} from "./pipe/temperature.pipe.";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { GestionEtatPompeComponent } from './gestion-etat-pompe/gestion-etat-pompe.component';

const listeModulesAngularMaterial = [
  MatCardModule,
  MatGridListModule,
  MatSlideToggleModule
]

@NgModule({
  declarations: [
    CapteurTemperatureComponent,
    MonitoringComponent,
    TemperaturePipe,
    GestionEtatPompeComponent,
  ],
  imports: [
    CommonModule,
    ...listeModulesAngularMaterial,
    MonitoringRoutingModule,
    SharedModule
  ]
})
export class MonitoringModule {
}
