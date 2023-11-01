import {useReducer, useEffect,useState} from "react";

const reducers = {
  SET_WEATHER_DATA(state,action) {
    return {...state,weatherData: action.value}
  },
  // set_show_weather(state,action) {
  //   return {...state,show_weather: action.value}
  // },
  setSidePeek(state,action) {
    return {...state, sidePeek: action.value};
  }
}
const reducer = function (state, action) {
  if(reducers[action.type]) {
    return reducers[action.type] (state, action)
  } else return state;
}

export default  function Weather_api () {
  const [state, dispatch] = useReducer(reducer, {sidePeek: false, show_weather:'show weather' ,weatherData: {}});
  const setSidePeek = function (updatedSidePeek) {
    dispatch({type: 'setSidePeek',value: updatedSidePeek})
  };
  // const set_show_weather = function() {
  //   dispatch({type:'set_show_weather', value:'hide weahter'})
    
  // }
  const SET_WEATHER_DATA = function() {
     
    
    fetch(`https://api.ipify.org?format=json`)
    .then((response) => response.json())
    .then((data) => fetch(`http://ipwho.is/${data.ip}`))
    .then((response) => response.json())
    .then((cordinates) => 
     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cordinates.latitude}&longitude=${cordinates.longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=auto`)
    )
    
    .then((response) => response.json())
    .then((data) =>  dispatch({ type: 'SET_WEATHER_DATA', value: data}))
    .catch((error) => {
      console.error('Error:', error);
    })
  }
  /*
  const [users, setUsers] = useState('')
  const  setLogin = async function() {
    await fetch("http://localhost:8080/login",{mode: 'no-cors'})
    .then ((response) => response.json() )
    .then((data) => setUsers(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  } */
    return {
      // setLogin:setLogin,
      weather : state.weatherData,
      SET_WEATHER_DATA,
      setSidePeek,
      sidePeek: state.sidePeek,
      show_weather: state.show_weather,
      // set_show_weather,
      // users,
      // setUsers

    }
    
  
  
}