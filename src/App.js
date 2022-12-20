import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Dayweather from "./components/Dayweather";
import Weather from "./components/Weather";
import FakeWeather from "./data/FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDayW: FakeWeather
    }
  }

  render() {
    { console.log(this.state.allDayW.list[5].weather[0].main) }

    return (

      <div className="app">
        <Search />
        <main>
          <Weather
            des={this.state.allDayW.list[4].weather[0].description}
            minT={this.state.allDayW.list[4].main.temp_min}
            maxT={this.state.allDayW.list[4].main.temp_max}
            humidity={this.state.allDayW.list[4].main.humidity}
            pressure={this.state.allDayW.list[4].main.pressure}
            src={this.state.allDayW.list[4].weather[0].main.toLowerCase()} />

            
          <Dayweather data={this.state.allDayW.list.slice(5, 12)} />
        </main>
      </div>
    );
  }
}
export default App;