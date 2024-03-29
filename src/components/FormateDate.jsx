import React from 'react'

export default function FormateDate(props) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let month = months[props.date.getMonth()]
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saterday',
  ]
  let day = days[props.date.getDay()]
  let hours = props.date.getHours()
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = props.date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return (
    <div>
      {day}, {month} {hours}:{minutes}
    </div>
  )
}
