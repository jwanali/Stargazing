import React from "react";



// const Weather = (props) => {
//   console.log(props.Weather)
//   return (
//     <div>{props.weather.latitude}</div>
//   )
// }

// export default Weather;
import { useState } from 'react';
import Search from "./weather/search";
import CurrentWeather from "./weather/current-weather";
import Forecast from "./weather/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY} from "../api";
// import './App.css';


function Weather() {
  const [ currentWeather, setCurrentWeather] = useState(null);
  const [ forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [ lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    
    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label , ...weatherResponse});
        setForecast({ city: searchData.label , ...forecastResponse});
      })
      .catch((err) => console.log(err));
  } 
  console.log(currentWeather);
  console.log(forecast);
  return  (
    <div className='cotainer'>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>    
  );
}

export default Weather;
