import React, { Component ,  setState }  from "react";
import "./App.css";
import Search from "./components/Search";
import Dayweather from "./components/Dayweather";
import Weather from "./components/Weather";
import FakeWeather from "./data/FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDayW: FakeWeather,
      isLoaded: false
    }
  }

  fetchData = (n) => {
    let fetchData=(`http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=af6aeff85cd304cc460ed995818338e4`)
    fetch(fetchData)
    .then(res => res.json())
    .then(data => {console.log(data); this.setState({allDayW: data}); this.setState({isLoaded: true})})
  }

  render() {
    return (
      <div className="app">
        <Search event={this.fetchData}/>
        <main>
          {this.state.isLoaded && <Weather
            des={this.state.allDayW.list[0].weather[0].description}
            minT={this.state.allDayW.list[0].main.temp_min}
            maxT={this.state.allDayW.list[0].main.temp_max}
            humidity={this.state.allDayW.list[0].main.humidity}
            pressure={this.state.allDayW.list[0].main.pressure}
            src={this.state.allDayW.list[0].weather[0].main.toLowerCase()} />}
          {this.state.isLoaded && <Dayweather data={this.state.allDayW.list.slice(1, 7)} />}
        </main>
      </div>
    );
}}
export default App;