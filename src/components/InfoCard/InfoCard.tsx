import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { WeatherData } from "../Types/weather.types";
import WarmWeather from "../../resources/warm-bg.jpeg";
import ColdWeather from "../../resources/cold-bg.jpeg";
import "./InfoCard.scss";

interface Props {
  data: WeatherData;
}

// const iconList: WeatherType[] = [
//   {
//     description: "clear sky",
//     main: "Clear",
//     icon: Clear,
//   },
//   {
//     description: "light rain",
//     main: "Rain",
//     icon: Rain,
//   },
//   {
//     description: "overcast clouds",
//     main: "Clouds",
//     icon: Cloud,
//   },
//   {
//     description: "overcast clouds",
//     main: "Clouds",
//     icon: Cloudy,
//   },
// ];

const InfoCard = ({ data }: Props) => {
  const dateBuilder = (d: any) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div className="info-card-container">
      <h1>Weather Information</h1>
      <div className="weather-info">
        <div className="location-information">
          {data.main.temp > 18 ? (
            <img src={WarmWeather} alt="" />
          ) : (
            <img src={ColdWeather} alt="" />
          )}
          <div className="city-information">
            <div className="city-section">
              <p className="section-para">City: </p>
              <p className="information-para">
                {data?.name}, {data?.sys.country}
              </p>
            </div>
            <div className="city-section">
              <p className="section-para">Temperature:</p>
              <p className="information-para">
                {Math.round(data?.main.temp)}°c
              </p>
            </div>
            <div className="city-section">
              <p className="section-para">Minimum expected: </p>
              <p className="information-para">
                {" "}
                {Math.round(data?.main.temp_min)}°c
              </p>
            </div>
            <div className="city-section">
              <p className="section-para">Maximum expected: </p>
              <p className="information-para">
                {Math.round(data?.main.temp_max)}°c
              </p>
            </div>
            <div className="city-section">
              <p className="section-para">Current condition: </p>
              <p className="information-para">{data?.weather[0].main}</p>
              <WeatherIcon data={data.weather[0]} />
            </div>
          </div>
        </div>
      </div>
      <div className="date-section">{dateBuilder(new Date())}</div>
    </div>
  );
};

export default InfoCard;
