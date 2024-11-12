import { WeatherCloudsDTO } from './weather-clouds.interface';

export class WeatherClouds {
    all: number = 0;

    /**
     * Append data from JSON object
     *
     * @param {WeatherCloudsDTO} data
     * @return {WeatherClouds}
     */
    fromJson(data: WeatherCloudsDTO): WeatherClouds {
        if (data?.all !== undefined) {
            this.all = data.all;
        }

        return this;
    }

    /**
     * Return JSON object ...
     *
     * @return {WeatherCloudsDTO}
     */
    toJson(): WeatherCloudsDTO {
        const data = {} as WeatherCloudsDTO;

        data.all = this.all;

        return data;
    }

    /**
     * Create WeatherClouds object from data object
     *
     * @param {WeatherCloudsDTO} data
     * @return {WeatherClouds}
     */
    static factory(data: WeatherCloudsDTO): WeatherClouds {
        return new WeatherClouds().fromJson(data);
    }
}
