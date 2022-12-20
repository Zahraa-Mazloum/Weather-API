import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import React, { Component } from "react";
import "./Weather.css";
import FakeWeather from "../data/FakeWeather.json";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";




class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = FakeWeather
    }
    render() {
        // let image = this.state.list[0].weather[0].main;
        const imageSrc = (image) => {
            if (image === "clouds") return cloudy;
            else if (image === "clear") return clear;
            else if (image === "mostlycloudy") return mostlycloudy;
            else if (image === "partlycloudy") return partlycloudy;
            else if (image === "snow") return snow;
            else if (image === "storm") return storm;
            else if (image === "rain") return rain;
            else if (image === "fog") return fog;
            else if (image === "drizzle") return drizzle;
        };
        return (
            <div className="weather">
                <img src={imageSrc(this.props.src)}  width="450" height="500" /> 
                <p className="title titles">{this.props.des}</p>
                <p className="title firsttitle"><b>Temperature</b> {Math.round(this.props.minT - 273)}  &deg;C to {Math.round(this.props.maxT - 273)} &deg;C</p>
                <p className="title medium-title"><b>Humidity</b> {this.props.humidity} % <b>Pressure</b> {this.props.pressure} </p>
            </div>
        );
    }
}
export default Weather;