import React from 'react'
import WeatherIcon from './weatherIcon'

export default function DayForcast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max)
    return `${temperature}°`
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min)
    return `${temperature}°`
  }

  function day() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[day]
  }

  return (
    <div>
      <div className="forcast-day"> {day()}</div>
      <WeatherIcon iconCode={props.data.weather[0].icon} size={32} />
      <div className="forcast-temp">
        <span className="max-temp"> {maxTemperature()}</span>/{' '}
        <span className="min-temp">{minTemperature()}</span>
      </div>
    </div>
  )
}
