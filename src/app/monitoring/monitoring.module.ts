import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MonitoringComponent} from './monitoring.component';
import {MonitoringRoutingModule} from "./monitoring-routing.module";
import {CapteurTemperatureComponent} from './capteur-temperature/capteur-temperature.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";

const listeModulesAngularMaterial = [
  MatCardModule,
  MatGridListModule
]

@NgModule({
  declarations: [
    MonitoringComponent,
    CapteurTemperatureComponent,
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
