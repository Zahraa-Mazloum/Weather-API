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
        const idSrc = (id) => {
            if (id<300) return storm;
            else if (id>=300 && id <=499) return drizzle;
            else if (id>=500 && id<=599) return rain;
            else if (id>=600 && id<=699 ) return snow;
            else if (id>=700 && id<=799) return fog;
            else if (id===800) return clear;
            else if (id===801) return partlycloudy;
            else if (id>=801 && id<=805) return mostlycloudy;
            
        }   
        return (
            <div className="weather">
                <img src={idSrc(this.props.src)}  width="450" height="500" /> 
                <p className="title titles">{this.props.des}</p>
                <p className="title firsttitle"><b>Temperature</b> {Math.round(this.props.minT )}  &deg;C to {Math.round(this.props.maxT )} &deg;C</p>
                <p className="title medium-title"><b>Humidity</b> {this.props.humidity} % <b>Pressure</b> {this.props.pressure} </p>
            </div>
        );
    }
}
export default Weather;