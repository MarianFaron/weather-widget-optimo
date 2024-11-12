import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_KEY } from '../../../environment/weather-api-key';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherCity } from '../models/weather-city.model';
import { WeatherCityDTO } from '../models/weather-city.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private httpClient = inject(HttpClient);

  baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather';

  getCityData(lat: string, lon: string): Observable<WeatherCity> {
    const url: string = `${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    return this.httpClient
      .get<WeatherCityDTO>(url)
      .pipe(
        map((response: WeatherCityDTO) => {
          return WeatherCity.factory(response);
        }),
        catchError((error) => {
          return throwError(
            () => 
              new Error('Resource Not Found')
          );
        }),
    );
  };
}
