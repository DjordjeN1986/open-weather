export interface WeatherData {
  id: number;
  main: MainType;
  name: string;
  sys: CountryType;
  weather: WeatherType[];
}

export interface MainType {
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface CountryType {
  country: string;
  [key: string]: any;
}

export interface WeatherType {
  description: string;
  main: string;
  icon: any;
}
