import React, { useState } from "react";
import axios from "axios";
import InfoCard from "../components/InfoCard";
import SearchBar from "../components/SearchBar";

import "./Weather.scss";
import { WeatherData } from "../components/Types/weather.types";

const api = {
  key: "59c6580fca97534b87a9a3c5edd45550",
  base: "http://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData>();

  const fetchWeather = async (searchParam: string): Promise<any> => {
    try {
      const { data } = await axios.get(
        `${api.base}weather?q=${searchParam}&units=metric&APPID=${api.key}`
      );
      setWeather(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="container">
        <h1 className="weather-stats">Weather Statistics App</h1>
        <SearchBar onSearch={fetchWeather} />
        {weather ? <InfoCard data={weather!} key={weather?.id} /> : ""}
      </div>
    </main>
  );
};

export default Weather;
