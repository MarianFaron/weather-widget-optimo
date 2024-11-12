import { CommonModule, DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { WeatherItemComponent } from "../weather-item/weather-item.component";
import { WeatherService } from '../../services/weather.service';
import { WeatherCity } from '../../models/weather-city.model';
import { City } from '../../models/city.model';
import { CITY_DATA } from '../../../../data/city-data';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [CommonModule, DatePipe, WeatherItemComponent],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.scss'
})
export class WeatherListComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private destroyRef = inject(DestroyRef);
  currentDate: Date = new Date();
  weatherCity: WeatherCity[] = [];
  cities: City[] = [];
  refreshCounter: number = 10;  
  reloadCounter: number = 60;
  counterInterval: any;
  reloadInterval: any;

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getWeatherData(this.getRandomCities(3), true);
    this.getCountersValue();

    this.reloadInterval = setInterval(() => {
      if (this.reloadCounter >= 60 || this.reloadCounter <= 0) {
        this.getWeatherData(this.cities, true);
      } else {
        this.getWeatherData(this.cities, false);
      }      
    }, 10000);
  }

  private getCountersValue(): void {
    this.counterInterval = setInterval(() => {
      this.refreshCounter--;
      this.reloadCounter--;

      if (this.refreshCounter < 1) {
        this.refreshCounter = 10;
      }

      if (this.reloadCounter < 1) {
        this.reloadCounter = 60;
      }
    }, 1000);
  }  

  private getWeatherData(cities: City[], reloadData: boolean): void {
    this.weatherCity = [];

    if (reloadData) {
      this.cities = this.getRandomCities(3);
    }

    cities.forEach((city: City) => {
      const citySubscription$ = this.weatherService.getCityData(city.lat, city.lon).subscribe({
        next: (data: WeatherCity) => {
          this.weatherCity.push(data as WeatherCity);
        },
        error: (error: Error) => {
          console.log(error);
        },
        complete: () => {
          this.weatherCity.sort((a, b) => b.id - a.id);
        }
      });

      this.destroyRef.onDestroy(() => {
        citySubscription$.unsubscribe();
      });
    });
  }

  private getRandomCities(num: number): City[] {
    const shuffled = CITY_DATA.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

  openExternalLink(id: number): void {
    window.open(`https://openweathermap.org/city/${id}`, '_blank');
  }

  ngOnDestroy(): void {
    this.counterInterval.clearInterval();
    this.reloadInterval.clearInterval();
  }
}
