import React from 'react'
import FormateDate from './FormateDate'
import WeatherIcon from './weatherIcon'
import WeatherUnits from './weatherUnits'

export default function WeatherInput(props) {
  return (
    <div className="WeatherInput">
      <h1 className="mb-3">
        {props.Form.city}, <small className="fs-6">{props.Form.country}</small>
      </h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="fs-4 text-muted">
              <FormateDate date={props.Form.date} />
            </li>
            <li className="text-capitalize mb-3 description">
              {props.Form.description}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li className="feel">
              Feels-like : {Math.round(props.Form.feels)}
              <span className="unitss fs-6 p-0 ">°C</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mt-0 ">
          {/* here start Icons */}

          <WeatherIcon iconCode={props.Form.icon} size={50} />
          <WeatherUnits celsius={props.Form.Temp} />
        </div>
        <div className="col-6">
          <ul className="showforecast">
            <li>Humidity : {props.Form.humidity}%</li>
            <li> Wind : {Math.round(props.Form.wind)} km/h</li>
            <li>Pressure : {props.Form.pressure}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
