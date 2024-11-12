import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherListComponent } from './weather/components/weather-list/weather-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
