// // import React, { useState, useEffect} from "react";

// // export const DateTime = ({ data}) => {
// //   const [date, setDate] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => setDate(new Date()),1000)

// //     return function cleanup() {
// //       clearInterval(timer)
// //     }
// //   });

// //   return(
// //     <div>
// //       <p>Time : {date.toLocaleTimeString()}</p>
// //       <p>Date : {date.toLocaleDateString()}</p>
// //     </div>
// //   )
// // }

// // export default DateTime;
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { TIME_API_URL, geoApiOptions } from '../api';

const DateTime = ({ onSearchChange }) => {

  const [time, setTime] = useState(null);
  const loadOptions = () => {
    return fetch(`${TIME_API_URL}/cities/Q60/dateTime`, geoApiOptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  const handleOnChange = (searchData) => {
    setTime(searchData);
    onSearchChange(searchData);
  }
  return (
    <AsyncPaginate
      placeholder="Search for time"
      debounceTimeout={600}
      value={time}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default DateTime;
