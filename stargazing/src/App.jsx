import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRoute from "./components/LoginRoute";
import Weather from "./components/Weather";
import Registration from "./components/Registration";
import Login from "./components/Login";
import useApplicationData from "./hook/useApplicationData";
import EventTable from "./components/EventTable";
import Home from "./components/Home";

function App() {
  const { onSignUp, onLogin, message, messageType, onCreateEvent,saveduser } =
    useApplicationData({}, {}, "", "",{},{id:0, event_name:"",date:"1900-01-01",description:""});
  return (
    <Router>
      <div>
          <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<EventTable saveduser={saveduser} />} />
          <Route
            path="/signup"
            element={
              <Registration
                onSignUp={onSignUp}
                message={message}
                messageType={messageType}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginRoute
                onLogin={onLogin}
                message={message}
                messageType={messageType}
                saveduser={saveduser}
              />
            }
          />
          {/* Add other routes(Home, Saved, ..) for  application */}
        </Routes>
      </div>
   
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import './components/Weather'
// import Weather_api from './hook/weather_api';
// import Weather from './components/Weather';
// import { useState } from 'react';
// //ip = JSON.parse(body).ip;

// function App() {
//   const {
//     weather,
//     SET_WEATHER_DATA,
//     setSidePeek,
//     sidePeek,
//     show_weather,
//     set_show_weather
//   } = Weather_api()
//  /*
//   const[weather, setWeather] = useState<Weather>({});
//   const show_weather = function () {
//     console.log('show weather')
//     fetch(`https://api.ipify.org?format=json`)
//     .then((response) => response.json())
//     .then((data) => fetch(`http://ipwho.is/${data.ip}`))
//     .then((response) => response.json())
//     .then((cordinates) =>
//      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cordinates.latitude}&longitude=${cordinates.longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=auto`)
//     )

//     .then((data) => data.json())
//     .then((response) => console.log(response))
//     .catch((error) => {
//       console.error('Error:', error);
//     })
//   }
//   */
//   return (
//     <div className="App">
//       <header className="App-header">
//         Stargazing
//         <button onClick={() => {
//           set_show_weather();
//         if (!sidePeek) {
//           setSidePeek(true);
//           SET_WEATHER_DATA();

//         } else {
//           setSidePeek(false);

//         };

//         }} >{show_weather}</button>

//         {sidePeek && <Weather weather={weather} SET_WEATHER_DATA={SET_WEATHER_DATA}  ></Weather>}
//       </header>
//     </div>
//   );
// }

// export default App;
