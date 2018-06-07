import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HabitCount from './HabitCount'
import HabitList from './HabitList'

// window.React = React // may not be necessary but could prevent "React not found error when rendering in browser"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HabitCount total={50}
                    exercise={20}
                    korean={10}
                    programming={40}
                    goal={100}/>

        <HabitList days={
          [
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
        } />
      </div>
    );
  }
}

export default App;
