import React from 'react'
import FormateDate from './FormateDate'
import WeatherIcon from './weatherIcon'
import WeatherUnits from './weatherUnits'

export default function WeatherInput(props) {
  return (
    <div className="WeatherInput">
      <h1>
        {props.Form.city}, <small className="fs-6">{props.Form.country}</small>
      </h1>
      <ul>
        <li>
          <FormateDate date={props.Form.date} />
        </li>
        <li className="text-capitalize">{props.Form.description}</li>
        <li className="mb-2">Feels-like : {Math.round(props.Form.feels)}°C</li>
      </ul>
      <div className="row">
        <div className="col-6">
          {/* here start Icons */}
          <span className="p-2 m-0 pt-5 ">
            <WeatherIcon iconCode={props.Form.icon} />
          </span>
          <WeatherUnits celsius={props.Form.Temp} />
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
