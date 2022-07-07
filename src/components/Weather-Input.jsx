import React from 'react'
import FormateDate from './FormateDate'

export default function WeatherInput(props) {
  return (
    <div className="WeatherInput">
      <h1>{props.Form.city}</h1>
      <ul>
        <li>
          <FormateDate date={props.Form.date} />
        </li>
        <li className="text-capitalize">{props.Form.description}</li>
        <li>Feels-like : {Math.round(props.Form.feels)}°C</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.Form.icon}
            alt={props.Form.description}
            className="mb-4 "
          />

          <span className="today-temp">{Math.round(props.Form.Temp)}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Temperature : {Math.round(props.Form.maxtemp)}°/
              {Math.round(props.Form.mintemp)}°C
            </li>
            <li>Humidity : {props.Form.humidity}%</li>
            <li> Wind : {Math.round(props.Form.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
