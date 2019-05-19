import React from 'react';
import Header from './components/headerComponents/header';
import Middle from './components/middleComponents/middle';
import Weather from './components/weatherComponents/weather';

const API_KEY = "c4219269114ac1526855c464ca4a03ec";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const apicall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await apicall.json();

      if (city && country) {

        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
      });
    } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please input city and country!"
      });
    }
  }

  render() {

    return(
      
      <div>
      
      <Header />
      <Middle getWeather = {this.getWeather}
      />
      <Weather 
          temperature={this.state.temperature} 
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />

    </div>
    );
  }
};

export default App;