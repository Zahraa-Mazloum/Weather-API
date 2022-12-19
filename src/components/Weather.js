import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import React, { Component } from "react";
import "./Weather.css";

class Weather extends React.Component{
    render() {
    return(
        <div class="weather">
          <img src={mostlycloudly} alt="mostlycloudy"   />
          <p className="title titles">overcast clouds</p>
          <p className="title firsttitle"><b>Temperature</b> 10&deg;C to 11&deg;C</p>
          <p className="title medium-title"><b>Humidity</b> 18% <b>Pressure</b> 1008.48</p>
          </div>
   ); }
}
export default Weather;