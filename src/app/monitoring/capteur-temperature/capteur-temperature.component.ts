import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {map} from "rxjs/operators";
import {TypeSondes} from "./types/type-sondes.type";


@Component({
  selector: 'app-capteur-temperature',
  templateUrl: './capteur-temperature.component.html',
  styleUrls: ['./capteur-temperature.component.scss']
})
export class CapteurTemperatureComponent implements OnInit {

  // @ts-ignore
  @Input() temperature: TypeSondes;

  // @ts-ignore
  @ViewChild('spawn', {read: ViewContainerRef, static: true}) graphique;

  // @ts-ignore
  public temp: number;

  public options: any;

  constructor(public readonly dataService: DataService) {
  }

  ngOnInit(): void {
    this.options = {
      series: [{
        type: 'gauge',
        center: ["50%", "60%"],
        startAngle: 180,
        endAngle: 0,
        min: 15,
        max: 35,
        splitNumber: 0,
        itemStyle: {
          color: '#91e9ff'
        },
        progress: {
          show: false,
          width: 10
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 8,
          offsetCenter: [0, '-70%'],
          itemStyle: {
            color: 'auto'
          }
        },
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.025,'#51eafa'],
              [0.050,'#47e8f2'],
              [0.075,'#3fe6ea'],
              [0.100,'#38e3e2'],
              [0.125,'#33e1d9'],
              [0.150,'#31ded0'],
              [0.175,'#31dbc7'],
              [0.200,'#34d8bd'],
              [0.225,'#39d6b3'],
              [0.250,'#3fd2a8'],
              [0.275,'#45cf9e'],
              [0.300,'#4ccc94'],
              [0.325,'#52c989'],
              [0.350,'#59c57e'],
              [0.375,'#60c174'],
              [0.400,'#66be69'],
              [0.425,'#6cba5e'],
              [0.450,'#73b654'],
              [0.475,'#79b149'],
              [0.500,'#7ead3f'],
              [0.525,'#84a934'],
              [0.550,'#8aa42a'],
              [0.575,'#8f9f1e'],
              [0.600,'#949a10'],
              [0.625,'#9a9500'],
              [0.650,'#9f9000'],
              [0.675,'#a48a00'],
              [0.700,'#a98500'],
              [0.725,'#ad7f00'],
              [0.750,'#b27800'],
              [0.775,'#b67200'],
              [0.800,'#ba6b00'],
              [0.825,'#be6300'],
              [0.850,'#c25b00'],
              [0.875,'#c65300'],
              [0.900,'#c94a00'],
              [0.925,'#cb4006'],
              [0.950,'#ce3412'],
              [0.975,'#d0261a'],
              [1,'#d11022'],
            ]
          }
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {
          show: false
        },
        title: {
          offsetCenter: [0, '-40%'],
          fontSize: 15,
          value: 'test'
        },
        detail: {
          valueAnimation: true,
          width: '40%',
          lineHeight: 5,
          height: 15,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 15,
          formatter: '{value} °C',
          color: 'auto'
        },
        data: [{
          value: 0
        }],
        radius: "120%"
      }],
    };

    if(this.temperature === "temperatureAir") this.options.series[0].data[0].name = 'Temp. air';
    if(this.temperature === "temperatureEntreeEau") this.options.series[0].data[0].name = 'Temp. eau entrée';
    if(this.temperature === "temperatureSortieEau") this.options.series[0].data[0].name = 'Temp. eau sortie';

    this.dataService.data$.pipe(
      map((data: any) => data && data[this.temperature])
    ).subscribe((temp) => {
      console.log(temp);
      this.options.series[0].data[0].value = temp + 0;
      const newOptions = {
        ...this.options
      };
      newOptions.series[0].data[0].value = temp;
      this.options = newOptions;
      // this.options = {
      //   ...this.options,
      //   series: [
      //     {
      //       data: [
      //         {value: temp}
      //       ]
      //     }]
      // }
      // this.temp = temp;
    });


  }

}



