import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitoringComponent} from './monitoring.component';
import {MonitoringRoutingModule} from "./monitoring-routing.module";
import {CapteurTemperatureComponent} from './composants/capteur-temperature/capteur-temperature.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";
import {TemperaturePipe} from "./pipe/temperature.pipe.";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { GestionEtatPompeComponent } from './composants/gestion-etat-pompe/gestion-etat-pompe.component';
import { StatutPompeComponent } from './composants/statut-pompe/statut-pompe.component';

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
    StatutPompeComponent,
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
