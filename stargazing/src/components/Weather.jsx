import React from "react";

const Weather = (props) => {
  console.log(props.Weather);
  return <div>{props.weather.latitude}</div>;
};

export default Weather;
