import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationRoutingModule} from "./configuration-routing.module";
import {SharedModule} from "../shared/shared.module";
import {ConfigurationComponent} from './configuration.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule
  ]
})
export class ConfigurationModule {
}
