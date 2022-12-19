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
          <Weather/>
          <Dayweather />
        </main>
      </div>
    );
  }
}
export default App;