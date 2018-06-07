import React from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const HabitRow = ({location, date, exercise, korean, programming}) => (
  <tr>
    <td>{date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}</td>
    <td>{location}</td>
    <td>{(exercise) ? <Terrain /> : null}</td>
    <td>{(korean) ? <Calendar /> : null}</td>
    <td>{(programming) ? <SnowFlake /> : null}</td>
  </tr>
)