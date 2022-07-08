import React, { useState } from 'react'
import axios from 'axios'
import './DailyForcast.css'
import DayForcast from './DayForcast'

export default function DailyForcast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }
  if (loaded) {
    return (
      <div className="Forcast">
        <div className="row">
          <div className="col">
            <DayForcast data={forecast[0]} />
          </div>
        </div>
      </div>
    )
  } else {
    let apiKey = '5f472b7acba333cd8a035ea85a0d4d4c'
    let longitude = props.coords.lon
    let latitude = props.coords.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return null
  }
}
