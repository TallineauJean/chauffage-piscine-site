import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebSocketService} from "./services/ws/web-socket.service";
import {PompeService} from "./services/pompe/pompe.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  providers: [
    WebSocketService,
    PompeService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
