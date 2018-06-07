import React from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import HabitRow from './HabitRow'

export const HabitList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Exercise</th>
        <th>Korean</th>
        <th>Programming</th>
      </tr>
    </thead> 
    <tbody>
      {days.map((day, i) => 
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
)