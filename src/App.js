import React, { Component } from "react";
import "./App.css";
import Search  from "./components/Search";
import Dayweather from "./components/Dayweather";
import Weather from "./components/Weather";

class App extends Component {

  
  render() {
    return (
      
      <div className="app">
        <Search/>
          <main>
          <Weather minTemp={10} maxTemp={11} Humi={18} Pressu={1008.48}/>
          <Dayweather />
        </main>
      </div>
    );
  }
}
export default App;