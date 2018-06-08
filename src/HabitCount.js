import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
  return (( decimal * 100 ) + '%' )
}
const calcGoalProgress = (total, goal) => {
  return percentToDecimal( total / goal )
}

export const HabitCount = ({total=0,
                            exercise=0,
                            korean=0,
                            programming=0,
                            goal=0}) => (
  <div className="habit-counter">
    <div className="habit-streak">
      <span>{total}</span>
      <span>days</span>
    </div>
    <div className="habit-exercise">
      <span>{exercise}</span>
      <span>days</span>
    </div>
    <div className="habit-korean">
      <span>{korean}</span>
      <span>day</span>
    </div>
    <div className="habit-programming">
      <span>{programming}</span>
      <span>days</span>
    </div>
    <div className="habit-goal">
      <span>
        {calcGoalProgress(total, goal)}
      </span>
      <span>completed</span>
    </div>
  </div>
)

HabitCount.propTypes = {
  total: PropTypes.number,
  exercise: PropTypes.number,
  korean: PropTypes.number,
  programming: PropTypes.number,
  goal: PropTypes.goal
}
