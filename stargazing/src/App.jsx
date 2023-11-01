import logo from './logo.svg';
import './App.css';
import './components/Weather'
import Weather_api from './hook/weather_api';
import Weather from './components/Weather';
import Login from './components/Login';
import { useState } from 'react';
//ip = JSON.parse(body).ip;

function App() {
  const {
    weather,
    SET_WEATHER_DATA,
    setSidePeek,
    sidePeek,
    // show_weather,
    // set_show_weather,
    // users,
    // setUsers,
    // setLogin

  } = Weather_api()
 
  return (
    <div className="App">
      <header className="App-header">
        Stargazing
        <button onClick={() => {
          // set_show_weather();
        if (!sidePeek) {
          setSidePeek(true);
          SET_WEATHER_DATA();
         
        } else {
          setSidePeek(false);
         
        };
       
        
        }} >show_weather</button>
        
        {sidePeek && <Weather weather={weather} SET_WEATHER_DATA={SET_WEATHER_DATA}  ></Weather>}
      </header>
    
      {/* <Login setLogin={setLogin} users={users} setUsers={setUsers}></Login> */}
    </div>
  );
}

export default App;
