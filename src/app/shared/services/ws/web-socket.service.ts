import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Data} from "../../model/data.model";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private dataSubject$: BehaviorSubject<Data>;
  public data$: Observable<any>;

  private websocket: WebSocket = new WebSocket(`ws://192.168.1.22/ws`);

  constructor() {
    console.log('Trying to open a WebSocket connection...');
    this.dataSubject$ = new BehaviorSubject<any>({});
    this.data$ = this.dataSubject$.asObservable();

    this.websocket.onopen = this.onOpen();
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage();
  }

  onOpen() {
    return (event: any) => {
      console.log('Connection opened -> ', event);
    }
  }

  onClose(event: CloseEvent) {
    console.log('Connection closed -> ', event);
  }

  onMessage() {
    return ({data}: any) => {
      const [temperatureEntreeEau, temperatureSortieEau, temperatureAir, isPompePiscineEnMarche, isPompeChauffageEnMarche] = data.split(';');
      const donnees: Data = {
        temperatureEntreeEau,
        temperatureSortieEau,
        temperatureAir,
        isPompePiscineEnMarche: isPompePiscineEnMarche !== "0",
        isPompeChauffageEnMarche: isPompeChauffageEnMarche !== "0"
      }
      this.dataSubject$.next(donnees);
    }
  }

}
