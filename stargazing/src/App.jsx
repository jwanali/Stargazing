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


import './App.css';
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import { Experience } from './components/Experience';
import {Stars} from '@react-three/drei';



function App() {
  return (
    <>    
      <Canvas>
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas> 
    </>
  );
}

export default App;
