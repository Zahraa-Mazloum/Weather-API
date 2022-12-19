import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import React, { Component } from "react";
import "./Weather.css";

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            maxT:this.props.maxTemp,
            minT:this.props.minTemp,
            Hum:this.props.Humi,
            Press:this.props.Pressu,
        }
    }
    render() {
    return(
        <div class="weather">
          <img src={mostlycloudly} alt="mostlycloudy"   />
          <p className="title titles">overcast clouds</p>
          <p className="title firsttitle"><b>Temperature</b> {this.state.minT} &deg;C to {this.state.maxT}&deg;C</p>
          <p className="title medium-title"><b>Humidity</b> {this.state.Hum}% <b>Pressure</b> {this.state.Press}</p>
          </div>
   ); }
}
export default Weather;