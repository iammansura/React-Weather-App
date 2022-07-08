import React, { useState } from 'react'

export default function WeatherUnits(props) {
  // const [unit, setUnit] = useState('celsius')
  return (
    <div className="Units">
      <span className="today-temp ">{Math.round(props.celsius)}</span>
      <span className="units fs-4 p-0 ">°C</span>
    </div>
  )

  // this is  the code for fahrenheit and celsius changes
  // function showfahrenheit(event) {
  //   event.preventDefault()
  //   setUnit('fahrenheit')
  // }
  // function showcelsius(event) {
  //   event.preventDefault()
  //   setUnit('celsius')
  // }

  // if (unit === 'celsius') {
  //   return (
  //     <div className="Units">
  //       <span className="today-temp ">{Math.round(props.celsius)}</span>
  //       <span className="units">
  //         °C|
  //         <a href="/" onClick={showfahrenheit}>
  //           °F
  //         </a>
  //       </span>
  //     </div>
  //   )
  // } else {
  //   let fahrenheit = (props.celsius * 9) / 5 + 32
  //   return (
  //     <div className="Units">
  //       <span className="today-temp ">{Math.round(fahrenheit)}</span>
  //       <span className="units">
  //         <a href="/" onClick={showcelsius}>
  //           °C
  //         </a>
  //         | °F
  //       </span>
  //     </div>
  //   )
  // }
}
