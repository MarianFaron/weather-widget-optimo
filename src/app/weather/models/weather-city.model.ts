import { WeatherCityDTO } from './weather-city.interface';
import { WeatherClouds } from './weather-clouds.model';
import { WeatherCoord } from './weather-coord.model';
import { WeatherMain } from './weather-main.model';
import { WeatherSys } from './weather-sys.model';
import { WeatherWind } from './weather-wind.model';
import { WeatherDTO } from './weather.interface';
import { Weather } from './weather.model';

export class WeatherCity {
    base: string = '';
    clouds: WeatherClouds = new WeatherClouds();
    cod: number = 0;
    coord: WeatherCoord = new WeatherCoord();
    dt: number = 0;
    id: number = 0;
    main: WeatherMain = new WeatherMain();
    name: string = '';
    sys: WeatherSys = new WeatherSys();
    timezone: number = 0;
    visibility: number = 0;
    weather: Weather[] = [];
    wind: WeatherWind = new WeatherWind();

    /**
     * Append data from JSON object
     *
     * @param {WeatherCityDTO} data
     * @return {WeatherCity}
     */
    fromJson(data: WeatherCityDTO): WeatherCity {
        if (data?.base !== undefined) {
            this.base = data.base;
        }

        if (data?.clouds?.all !== undefined) {
            this.clouds = WeatherClouds.factory(data.clouds);
        }

        if (data?.cod !== undefined) {
            this.cod = data.cod;
        }

        if (data?.coord !== undefined) {
            this.coord = WeatherCoord.factory(data.coord);
        }

        if (data?.dt !== undefined) {
            this.dt = data.dt;
        }

        if (data?.id !== undefined) {
            this.id = data.id;
        }

        if (data?.main !== undefined) {
            this.main = WeatherMain.factory(data.main);
        }

        if (data?.name !== undefined) {
            this.name = data.name;
        }

        if (data?.sys !== undefined) {
            this.sys = WeatherSys.factory(data.sys);
        }

        if (data?.timezone !== undefined) {
            this.timezone = data.timezone;
        }

        if (data?.visibility !== undefined) {
            this.visibility = data.visibility;
        }

        if (data?.weather !== undefined) {
            this.weather = data.weather.map((weatherItem: WeatherDTO) => Weather.factory(weatherItem));
        }

        if (data?.wind !== undefined) {
            this.wind = WeatherWind.factory(data.wind);
        }

        return this;
    }

    /**
     * Create WeatherCity object from data object
     *
     * @param {WeatherCityDTO} data
     * @return {WeatherCity}
     */
    static factory(data: WeatherCityDTO): WeatherCity {
        return new WeatherCity().fromJson(data);
    }
}
