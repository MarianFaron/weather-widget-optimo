import { Component, input } from '@angular/core';
import { WeatherCity } from '../../models/weather-city.model';
import { KelvinToCelsiusPipe } from '../../../common/pipes/kelwin-to-celcjusz.pipe';

@Component({
  selector: 'app-weather-item',
  standalone: true,
  imports: [KelvinToCelsiusPipe],
  templateUrl: './weather-item.component.html',
  styleUrl: './weather-item.component.scss',
})
export class WeatherItemComponent {
  data = input.required<WeatherCity>();

  get iconUrl(): string {
    return `https://openweathermap.org/img/wn/${this.data()?.weather[0]?.icon}.png`;
  }
}
