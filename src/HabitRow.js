import React from 'react'
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

const HabitRow = ({location, date, exercise, korean, programming}) => (
  <tr>
    <td>{date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}</td>
    <td>{location}</td>
    <td>{(exercise) ? <Terrain /> : null}</td>
    <td>{(korean) ? <Calendar /> : null}</td>
    <td>{(programming) ? <SnowFlake /> : null}</td>
  </tr>
)

export default HabitRow

HabitRow.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  exercise: PropTypes.bool,
  korean: PropTypes.bool,
  programming: PropTypes.bool
}
