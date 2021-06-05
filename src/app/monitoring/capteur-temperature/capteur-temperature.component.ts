import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-capteur-temperature',
  templateUrl: './capteur-temperature.component.html',
  styleUrls: ['./capteur-temperature.component.scss']
})
export class CapteurTemperatureComponent implements OnInit {

  @Input() typeSonde!: string;

  public temperature!: string
  public titre!: string;

  constructor(public readonly dataService: DataService) {
  }

  ngOnInit(): void {
    if(this.typeSonde === "temperatureAir") this.titre = 'Température air';
    if(this.typeSonde === "temperatureEntreeEau") this.titre = 'Température piscine';
    if(this.typeSonde === "temperatureSortieEau") this.titre = 'Température sortie chauffage';


    this.dataService.data$.pipe(
      map((data: any) => data && data[this.typeSonde])
    ).subscribe((temp) => {
      this.temperature = temp;
    });
  }

}
