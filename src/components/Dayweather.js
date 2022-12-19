import React from "react";
import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import "./dayweather.css";

class Dayweather extends React.Component {
    render() {
        return (
    <div class="dayweather">
    <div className="tcontainer">
      <p className="time">3:00</p>
      <img src={mostlycloudly} alt="weather" />
      <p className="temp">8&deg;C</p>
    </div>
    <div className="tcontainer">
      <p className="time">6:00</p>
      <img src={mostlycloudly} alt="weather" />
      <p className="temp">9&deg;C</p>
    </div>  
    <div className="tcontainer">
      <p className="time">9:00</p>
      <img src={clear} alt="weather"/>
      <p className="temp">14&deg;C</p>
    </div>
    <div className="tcontainer">
      <p className="time">12:00</p>
      <img src={clear} alt="weather"/>
      <p className="temp">17&deg;C</p>
    </div>
    <div className="tcontainer">
      <p className="time">15:00</p>
      <img src={clear} alt="weather"/>
      <p className="temp">18&deg;C</p>
    </div>
    <div className="tcontainer">
      <p className="time">18:00</p>
      <img src={clear} alt="weather"/>
      <p className="temp">16&deg;C</p>
    </div>
    <div className="tcontainer">
      <p className="time">21:000</p>
      <img src={mostlycloudly} alt="weather"/>
      <p className="temp">13&deg;C</p>
    </div>
    </div>
    );
  }
}


export default Dayweather;