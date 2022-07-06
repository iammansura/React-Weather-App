import React from 'react'
import './SearchEngine.css'

export default function Searchengine() {
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
      <h1>Hannover</h1>
      <ul>
        <li>Wednesday 05:52</li>
        <li>Mostly Cloudy</li>
        <li>Feels-like : 21°C</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="	https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
            className="mb-4 "
          />

          <span className="today-temp">20</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Perciption : 15%</li>
            <li>Humidity : 41%</li>
            <li> Wind : 18 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
