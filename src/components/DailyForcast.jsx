import React from 'react'
import WeatherIcon from './weatherIcon'
import './DailyForcast.css'

export default function DailyForcast() {
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
}
