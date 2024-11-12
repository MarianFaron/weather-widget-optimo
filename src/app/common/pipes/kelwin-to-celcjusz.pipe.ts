import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
  standalone: true,
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value: number): number | null {
    if (typeof value !== 'number' || isNaN(value)) {
      return null;
    }
    
    return Math.round(value) - 273;
  }
}
