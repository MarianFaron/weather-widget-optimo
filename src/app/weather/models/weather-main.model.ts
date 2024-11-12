import { WeatherMainDTO } from "./weather-main.interface";

export class WeatherMain {
    feelsLike: number = 0;
    grndLevel: number = 0;
    humidity: number = 0;
    pressure: number = 0;
    seaLevel: number = 0;
    temp: number = 0;
    tempMax: number = 0;
    tempMin: number = 0;

    /**
     * Append data from JSON object
     *
     * @param {WeatherMainDTO} data
     * @return {WeatherMain}
     */
    fromJson(data: WeatherMainDTO): WeatherMain {
        if (data?.feels_like !== undefined) {
            this.feelsLike = data.feels_like;
        }

        if (data?.grnd_level !== undefined) {
            this.grndLevel = data.grnd_level;
        }

        if (data?.humidity !== undefined) {
            this.humidity = data.humidity;
        }

        if (data?.pressure !== undefined) {
            this.pressure = data.pressure;
        }

        if (data?.sea_level !== undefined) {
            this.seaLevel = data.sea_level;
        }

        if (data?.temp !== undefined) {
            this.temp = data.temp;
        }

        if (data?.temp_max !== undefined) {
            this.tempMax = data.temp_max;
        }

        if (data?.temp_min !== undefined) {
            this.tempMin = data.temp_min;
        }

        return this;
    }

    /**
     * Return JSON object ...
     *
     * @return {WeatherMainDTO}
     */
    toJson(): WeatherMainDTO {
        const data = {} as WeatherMainDTO;

        data.feels_like = this.feelsLike;
        data.grnd_level = this.grndLevel;
        data.humidity = this.humidity;
        data.pressure = this.pressure;
        data.sea_level = this.seaLevel;
        data.temp = this.temp;
        data.temp_max = this.tempMax;
        data.temp_min = this.tempMin;

        return data;
    }
    
    /**
     * Create WeatherMain object from data object
     *
     * @param {WeatherMainDTO} data
     * @return {WeatherMain}
     */
    static factory(data: WeatherMainDTO): WeatherMain {
        return new WeatherMain().fromJson(data);
    }
}
