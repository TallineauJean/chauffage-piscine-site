import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-capteur-temperature',
  templateUrl: './capteur-temperature.component.html',
  styleUrls: ['./capteur-temperature.component.scss']
})
export class CapteurTemperatureComponent implements OnInit {

  @Input() temperature: string = '';

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
          show: true,
          width: 5
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 5,

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
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '40%',
          lineHeight: 5,
          height: 15,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 15,
         // fontWeight: 'bolder',
          formatter: '{value} °C',
          color: 'auto'
        },
        data: [{
          value: 0
        }]
      }
      ],
    };

    this.dataService.data$.pipe(
      map((data: any) => data && data[this.temperature])
    ).subscribe((temp) => {
      console.log(temp);
      this.options.series[0].data[0].value = temp+0;
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



