import React, { Component ,  setState }  from "react";
import "./App.css";
import Search from "./components/Search";
import Dayweather from "./components/Dayweather";
import Weather from "./components/Weather";
import FakeWeather from "./data/FakeWeather.json";
import AceEditor from "react-ace";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDayW: FakeWeather,
      isLoaded: false,
      errMessage: "",
      error: null,
      codError: false,
    }
  }

  fetchData = (n) => {
    let fetchData=(`http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=af6aeff85cd304cc460ed995818338e4`)
    fetch(fetchData)
    .then(res => {return res.json();
  })
  .then(data => {
    if (data.cod !== "200") {
      console.log(data);
      this.setState({
          codError: true,
          errMessage: data.message,
          isLoaded: true,
      });}

    else{
      {console.log(data); this.setState({allDayW: data}); this.setState({isLoaded: true});this.setState({codError: false})}

    }
  },
  (error) => {
    this.setState({
        isLoaded: true,
        error,
    });
}
  );
  
}
 
  render() {
    const { codError ,error, isLoaded} = this.state;
        if (codError) {
            return (
                <div className="app">
                    <Search event={this.fetchData}/>
                    <main className="app_main">
                        <h1>{this.state.errMessage}</h1>
                        
                    </main>
                </div>
            );
            }
            else if (!isLoaded) {
              return (
                  <div className="app">
                      <Search event={this.fetchData} />
                      <main className="app_main">
                        <h3>search a city</h3>
                          <h1>Loading! PLease Wait </h1>
                      </main>
                  </div>
              );
          } 
            else if (error) {
              return (
                  <div className="app">
                      <Search event={this.fetchData} />
                      <main className="app_main">
                        <h1>Check your internet</h1>
                        
                    </main>
                      </div>);}
            else{
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
            src={this.state.allDayW.list[0].weather[0].id} />}
            
          {this.state.isLoaded && <Dayweather data={this.state.allDayW.list.slice(1, 7)} />}
        </main>
      </div>
    );
}}} 

//step 7 is already done with step 6 
export default App;