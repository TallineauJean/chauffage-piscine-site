import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject$: BehaviorSubject<any>;
  public data$: Observable<any>;

  private websocket: WebSocket = new WebSocket(`ws://192.168.1.22/ws`);

  constructor() {
    console.log('Trying to open a WebSocket connection...');

    this.dataSubject$ = new BehaviorSubject<any>({});
    this.data$ = this.dataSubject$.asObservable();

    this.websocket.onopen = this.onOpen();
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage(); // <-- add this line
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
     // console.log('On event -> ', data);
      const [temperatureEntreeEau, temperatureSortieEau, temperatureAir] = data.split(';');
      this.dataSubject$.next({temperatureEntreeEau, temperatureSortieEau, temperatureAir});
    }
  }
}
