import React from "react";
import { ReactComponent as Clear } from "../../resources/clear.svg";
import { ReactComponent as Rain } from "../../resources/rain.svg";
import { ReactComponent as Cloud } from "../../resources/cloud.svg";
import { ReactComponent as Cloudy } from "../../resources/cloudy.svg";
import { WeatherType } from "../Types/weather.types";

interface Props {
  data: WeatherType;
}

const WeatherIcon = ({ data: { main } }: Props) => {
  switch (main) {
    case "Rain":
      return <Rain />;
    case "Clouds":
      return <Cloudy />;
    default:
      return <Clear />;
  }
};

export default WeatherIcon;
