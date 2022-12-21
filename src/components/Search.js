import React from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  constructor(props){
    super(props)
    this.state={
      input:''
    }
  }
  render() {    
    return (
      <div>
        <header id="header">
          <input
            name="city"
            type="text"
            className="searching"
            onChange={e => this.setState({input: e.target.value})}
            placeholder="Type in a city name"
          />
          <button onClick={e => this.props.event(this.state.input)}>
            Find Weather
          </button>

        </header>
      </div>
    );
  }

}
export default Search;
