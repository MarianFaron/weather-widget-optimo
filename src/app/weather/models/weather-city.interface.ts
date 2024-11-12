import { WeatherCloudsDTO } from "./weather-clouds.interface";
import { WeatherCoordDTO } from "./weather-coord.interface";
import { WeatherMainDTO } from "./weather-main.interface";
import { WeatherSysDTO } from "./weather-sys.interface";
import { WeatherWindDTO } from "./weather-wind.interface";
import { WeatherDTO } from "./weather.interface";

export interface WeatherCityDTO {
    base: string;
    clouds: WeatherCloudsDTO;
    cod: number;
    coord: WeatherCoordDTO;
    dt: number;
    id: number;
    main: WeatherMainDTO;
    name: string;
    sys: WeatherSysDTO;
    timezone: number;
    visibility: number;
    weather: WeatherDTO[];
    wind: WeatherWindDTO;
};
