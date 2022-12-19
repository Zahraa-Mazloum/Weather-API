import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import mostlycloudly from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"

class App extends Component {

  
  render() {
    return (
      
      <div className="app">
     < Search />
        <main>
          <div class="weather">
          <img src={mostlycloudly} alt="weather" />
          <p className="title titles">overcast clouds</p>
          <p className="title firsttitle"><b>Temperature</b> 10&deg;C to 11&deg;C</p>
          <p className="title medium-title"><b>Humidity</b> 18% <b>Pressure</b> 1008.48</p>
          </div>
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
        </main>
      </div>
    );
  }
}
export default App;