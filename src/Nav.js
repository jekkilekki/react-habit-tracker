import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

const Nav = () => (
  <nav className="main-navigation">
    <ul className="nav">
      <li>
        <Link to="/" className="home-link" activeClassName="selected">
          <HomeIcon /> Home
        </Link>
      </li>
      <li>
        <Link to="/list" className="list-link" activeClassName="selected">
          <ListDaysIcon /> List
        </Link>
      </li>
      <li>
        <Link to="/add" className="add-link" activeClassName="selected">
          <AddDayIcon /> Add
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav