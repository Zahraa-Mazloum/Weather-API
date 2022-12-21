import React from "react";
import mostlycloudly from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import "./dayweather.css";
import FakeWeather from "../data/FakeWeather.json";
import Details from "./details";


class Dayweather extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
    <div className="dayweather">
      {this.props.data.map((e)=> (<Details time={e.dt_txt.slice(10,16)} temp={e.main.temp} key={e.dt_txt}  src={e.weather[0].id}/>))}
    </div>
    );
  }

}


export default Dayweather;
