import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  pure: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return isNaN(parseInt(value)) ? '...' : value;
  }

}
