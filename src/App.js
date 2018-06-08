import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import HabitCount from './HabitCount'
import HabitList from './HabitList'
import AddDayForm from './AddDayForm'
import { Switch, Route } from 'react-router-dom'
import Whoops404 from './Whoops404';

// window.React = React // may not be necessary but could prevent "React not found error when rendering in browser"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allHabitDays: [
        {
          location: "Coap Gym",
          date: new Date("6/8/2018"),
          exercise: true,
          korean: false,
          programming: true
        },
        {
          location: "Jeonju University",
          date: new Date("6/9/2018"),
          exercise: false,
          korean: false,
          programming: true
        },
        {
          location: "Antioch Church",
          date: new Date("6/10/2018"),
          exercise: false,
          korean: false,
          programming: false
        },
        {
          location: "Jeonju University",
          date: new Date("6/11/2018"),
          exercise: true,
          korean: true,
          programming: true
        }
      ]
    }
  }

  countDays(filtered) {
    return this.state.allHabitDays.filter((day) => (filtered) ? day[filtered] : day).length
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Habit Tracker</h1>
          <Nav />
        </header>
        <Switch>
          <Route exact path='/' render={() => (
            <HabitCount
              total={this.countDays()}
              exercise={this.countDays("exercise")}
              korean={this.countDays("korean")}
              programming={this.countDays("programming")} />
          )}/>
          <Route path='/list' render={({history}) => (
            <HabitList days={this.state.allHabitDays} filter={this.props.params.filter} />
          )}/>
          <Route path='/add' render={({history}) => (
            <AddDayForm />
          )}/>
          <Route path='*' component={Whoops404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
