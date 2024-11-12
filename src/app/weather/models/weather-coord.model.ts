import { WeatherCoordDTO } from "./weather-coord.interface";

export class WeatherCoord {
    lat: number = 0;
    lon: number = 0;

    /**
     * Append data from JSON object
     *
     * @param {WeatherCoordDTO} data
     * @return {WeatherCoord}
     */
     fromJson(data: WeatherCoordDTO): WeatherCoord {
        if (data?.lat !== undefined) {
            this.lat = data.lat;
        }

        if (data?.lon !== undefined) {
            this.lon = data.lon;
        }

        return this;
    }

    /**
     * Return JSON object ...
     *
     * @return {WeatherCoordDTO}
     */
    toJson(): WeatherCoordDTO {
        const data = {} as WeatherCoordDTO;

        data.lat = this.lat;
        data.lon = this.lon;

        return data;
    }

    /**
     * Create WeatherCoord object from data object
     *
     * @param {WeatherCoordDTO} data
     * @return {WeatherCoord}
     */
    static factory(data: WeatherCoordDTO): WeatherCoord {
        return new WeatherCoord().fromJson(data);
    }
}
