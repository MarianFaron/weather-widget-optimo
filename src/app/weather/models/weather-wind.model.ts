import { WeatherWindDTO } from "./weather-wind.interface";

export class WeatherWind {
    deg: number = 0;
    gust: number = 0;
    speed: number = 0;

    /**
     * Append data from JSON object
     *
     * @param {WeatherWindDTO} data
     * @return {WeatherWind}
     */
    fromJson(data: WeatherWindDTO): WeatherWind {
        if (data?.deg !== undefined) {
            this.deg = data.deg;
        }

        if (data?.gust !== undefined) {
            this.gust = data.gust;
        }

        if (data?.speed !== undefined) {
            this.speed = data.speed;
        }

        return this;
    }

    /**
     * Return JSON object ...
     *
     * @return {WeatherWindDTO}
     */
    toJson(): WeatherWindDTO {
        const data = {} as WeatherWindDTO;

        data.deg = this.deg;
        data.gust = this.gust;
        data.speed = this.speed;

        return data;
    }
    
    /**
     * Create WeatherWind object from data object
     *
     * @param {WeatherWindDTO} data
     * @return {WeatherWind}
     */
    static factory(data: WeatherWindDTO): WeatherWind {
        return new WeatherWind().fromJson(data);
    }
}
