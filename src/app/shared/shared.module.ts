import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from "./services/data.service";


@NgModule({
  declarations: [],
  providers: [
    DataService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
