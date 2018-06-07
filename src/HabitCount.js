import React, { Component } from 'react'

class HabitCount extends Component {
  percentToDecimal( decimal ) {
    return (( decimal * 100 ) + '%' )
  }
  calcGoalProgress( total, goal ) {
    return this.percentToDecimal( total / goal )
  }

  render() {
    return (
      <div className="habit-counter">
        <div className="habit-streak">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="habit-exercise">
          <span>{this.props.exercise}</span>
          <span>days</span>
        </div>
        <div className="habit-korean">
          <span>{this.props.korean}</span>
          <span>day</span>
        </div>
        <div className="habit-programming">
          <span>{this.props.programming}</span>
          <span>days</span>
        </div>
        <div className="habit-goal">
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
          <span>completed</span>
        </div>
      </div>
    )
  }
}

export default HabitCount