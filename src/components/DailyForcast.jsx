import React, { useState } from 'react'
import axios from 'axios'
import WeatherIcon from './weatherIcon'
import './DailyForcast.css'

export default function DailyForcast(props) {
  let [loaded, setLoaded] = useState(true)
  let [forcast, setForcast] = useState('')

  function handleResponse(response) {
    setForcast(response.data.daily)
    setLoaded(false)
  }
  if (loaded) {
    return (
      <div className="Forcast">
        <div className="row">
          <div className="col">
            <div className="forcast-day"> Fri</div>
            <WeatherIcon iconCode="01d" size={32} />
            <div className="forcast-temp">
              <span className="max-temp"> 18°</span>/{' '}
              <span className="min-temp">16°</span>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    let apiKey = '857fbe973ad9987d54d0a62fd2b80055'
    let lon = props.coords.lon
    let lat = props.coords.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)
    return null
  }
}
