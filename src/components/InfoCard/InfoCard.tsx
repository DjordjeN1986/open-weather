import React from "react";

import { WeatherData } from "../Types/weather.types";
import "./InfoCard.scss";

interface Props {
  data: WeatherData;
}

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
        <p>
          City: {data?.name}, {data?.sys.country}
        </p>
        <p>Temperature: {data?.main.temp} °c</p>
        <div>{dateBuilder(new Date())}</div>
      </div>
    </div>
  );
};

export default InfoCard;
