import React, { useState } from 'react'
import axios from 'axios'
import WeatherInput from './Weather-Input'
import DailyForcast from './DailyForcast'
import './SearchEngine.css'

export default function Searchengine(props) {
  const [weather, setWeather] = useState({ ready: false })
  //  use Boolean for conditioning
  const [city, setCity] = useState(props.city)

  // here  start response data
  function showTemp(response) {
    console.log(response.data)
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
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
      icon: response.data.weather[0].icon,
    })
  }

  function Search() {
    const apiKey = '857fbe973ad9987d54d0a62fd2b80055'

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(showTemp)
  }

  // search form function
  function handleSubmit(event) {
    event.preventDefault()
    Search()
  }
  //  search input
  function handleCity(event) {
    setCity(event.target.value)
  }

  // here Search for city
  if (weather.ready) {
    return (
      <div className="Searchengine">
        {/* start form search engine */}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                onChange={handleCity}
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
        {/* this funtion go to the search input  */}
        <WeatherInput Form={weather} />

        <DailyForcast />
      </div>
    )
  } else {
    // if we change value thn use let or fixed value thn used const
    Search()
    return 'Loading....'
  }
}
