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
    constructor(props){
      super(props)
      this.state=FakeWeather

      }
      
      render(){
      let image=this.state.list[0].weather[0].main;
        const imageSrc = (image) => {
            
                if (image === "Clouds") return cloudy;
                else if (image === "Clear") return clear;
                else if (image === "Mostlycloudy") return mostlycloudy;
                else if (image === "Partlycloudy") return partlycloudy;
                else if (image === "Snow") return snow;
                else if (image === "Storm") return storm;
                else if (image === "Rain") return rain;
                else if (image === "Fog") return fog;
                else if (image === "Drizzle") return drizzle;
              };
        return(
            <div className="tcontainer">
            <p className="time">{this.props.time}</p>
            <img src={imageSrc(this.props.src)} width="120" height="120"/>
            <p className="temp">{Math.round(this.props.temp - 273)} &deg;C</p>
          </div>

        );
      }














     
    }








export default Details;