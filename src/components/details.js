import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import FakeWeather from "../data/FakeWeather.json";
import Weather from "./Weather";

class Details extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const idSrc = (id) => {
      if (id<300) return storm;
      else if (id>=300 && id <=499) return drizzle;
      else if (id>=500 && id<=599) return rain;
      else if (id>=600 && id<=699 ) return snow;
      else if (id>=700 && id<=799) return fog;
      else if (id===800) return clear;
      else if (id===801) return partlycloudy;
      else if (id>=801 && id<=805) return mostlycloudy;
    };
    return (
      <div className="tcontainer">
        <p className="time">{this.props.time}</p>
        <img src={idSrc(this.props.src)} width="120" height="120" />
        <p className="temp">{Math.round(this.props.temp)} &deg;C</p>
      </div>

    );
  }

}

export default Details;