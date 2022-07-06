import React, { useState } from 'react'
import axios from 'axios'
import './SearchEngine.css'

export default function Searchengine() {
  //  use Boolean for conditioning

  const [weather, setWeather] = useState({ ready: false })

  // here  start response data
  function showTemp(response) {
    console.log(response.data)
    setWeather({
      ready: true,
      date: 'Wednesday 05:52',
      city: response.data.name,
      Temp: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      feels: response.data.main.feels_like,
      maxtemp: response.data.main.temp_max,
      mintemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      country: response.data.sys.country,
      icon: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    })
  }

  // Here start condition
  if (weather.ready) {
    return (
      <div className="Searchengine">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="search-form w-100 p-1"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>Wednesday 05:52</li>
          <li className="text-capitalize">{weather.description}</li>
          <li>Feels-like : {Math.round(weather.feels)}°C</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt={weather.description}
              className="mb-4 "
            />

            <span className="today-temp">{Math.round(weather.Temp)}</span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Temperature : {Math.round(weather.maxtemp)}°/
                {Math.round(weather.mintemp)}°C
              </li>
              <li>Humidity : {weather.humidity}%</li>
              <li> Wind : {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    // if we change value thn use let or fixed value thn used const
    const apiKey = '857fbe973ad9987d54d0a62fd2b80055'
    let city = 'Hannover'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(showTemp)
    return 'Loading....'
  }
}
