import { WeatherSysDTO } from "./weather-sys.interface";

export class WeatherSys {
    country: string = '';
    id: number = 0;
    sunrise: number = 0;
    sunset: number = 0;
    type: number = 0;

    /**
     * Append data from JSON object
     *
     * @param {WeatherSysDTO} data
     * @return {WeatherSys}
     */
    fromJson(data: WeatherSysDTO): WeatherSys {
        if (data?.country !== undefined) {
            this.country = data.country;
        }

        if (data?.id !== undefined) {
            this.id = data.id;
        }

        if (data?.sunrise !== undefined) {
            this.sunrise = data.sunrise;
        }

        if (data?.sunset !== undefined) {
            this.sunset = data.sunset;
        }

        if (data?.type !== undefined) {
            this.type = data.type;
        }

        return this;
    }

    /**
     * Return JSON object ...
     *
     * @return {WeatherSysDTO}
     */
    toJson(): WeatherSysDTO {
        const data = {} as WeatherSysDTO;

        data.country = this.country;
        data.id = this.id;
        data.sunrise = this.sunrise;
        data.sunset = this.sunset;
        data.type = this.type;

        return data;
    }
    
    /**
     * Create WeatherSys object from data object
     *
     * @param {WeatherSysDTO} data
     * @return {WeatherSys}
     */
    static factory(data: WeatherSysDTO): WeatherSys {
        return new WeatherSys().fromJson(data);
    }
}
