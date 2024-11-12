import { WeatherDTO } from "./weather.interface";

export class Weather {
    description: string = '';
    icon: string = '';
    id: number = 0;
    main: string = '';

    /**
     * Append data from JSON object
     *
     * @param {WeatherDTO} data
     * @return {Weather}
     */
    fromJson(data: WeatherDTO): Weather {
        if (data?.description !== undefined) {
            this.description = data.description;
        }

        if (data?.icon !== undefined) {
            this.icon = data.icon;
        }

        if (data?.id !== undefined) {
            this.id = data.id;
        }

        if (data?.main !== undefined) {
            this.main = data.main;
        }

        return this;
    }

    /**
     * Return JSON object ...
     *
     * @return {WeatherDTO}
     */
    toJson(): WeatherDTO {
        const data = {} as WeatherDTO;

        data.description = this.description;
        data.icon = this.icon;
        data.id = this.id;
        data.main = this.main;

        return data;
    }
    
    /**
     * Create Weather object from data object
     *
     * @param {WeatherDTO} data
     * @return {Weather}
     */
    static factory(data: WeatherDTO): Weather {
        return new Weather().fromJson(data);
    }
}
