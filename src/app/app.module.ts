import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";

const modulesAngularMaterial = [
  MatToolbarModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    ...modulesAngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
