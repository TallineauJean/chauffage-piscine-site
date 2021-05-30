import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MonitoringComponent} from "./monitoring.component";

const routes: Routes = [
  {
    path: '',
    component: MonitoringComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MonitoringRoutingModule { }
