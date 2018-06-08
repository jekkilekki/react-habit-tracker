import React from 'react'
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import HabitRow from './HabitRow'
import { Link } from 'react-router-dom'

const HabitList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/exercise|korean|programming/)) ? 
        days :
        days.filter(day => day[filter])

  return (
    <div className="habit-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Exercise</th>
            <th>Korean</th>
            <th>Programming</th>
          </tr>
          <tr>
            <td colspan={4}>
              <Link to="/list">All Days</Link>
              <Link to="/list/exercise">Exercise</Link>
              <Link to="/list/korean">Korean</Link>
              <Link to="/list/programming">Programming</Link>
            </td>
          </tr>
        </thead> 
        <tbody>
          {filteredDays.map((day, i) => 
            <HabitRow key={i}
                      location={day.location}
                      date={day.date}
                      exercise={day.exercise}
                      korean={day.korean}
                      programming={day.programming}
            /> // Or use ES6 spread operator to eliminate those keys <HabitRow key={i} {...day} />
          )}
        </tbody>   
      </table>
    </div>
  )
}

export default HabitList

HabitList.PropTypes = {
  days: function(props) {
    if( !Array.isArray(props.days)) {
      return new Error(
        "HabitList should be an array."
      )
    } else if( !props.days.length ) {
      return new Error(
        "HabitList must have at least one record."
      )
    } else {
      return null
    }
  }
}
