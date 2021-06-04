import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-capteur-temperature',
  templateUrl: './capteur-temperature.component.html',
  styleUrls: ['./capteur-temperature.component.scss']
})
export class CapteurTemperatureComponent implements OnInit {

  @Input() temperature: string = '';

  // @ts-ignore
  public temp: number

  constructor(public readonly dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.data$.pipe(
      tap((data) =>  console.log(data)),
      map((data: any) => data && data[this.temperature])
    ).subscribe((temp) => {
      this.temp = temp;
    });
  }

}
