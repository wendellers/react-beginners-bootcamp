// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    fontWeight: 'bold',
  },
}

const Nav = () =>
  <nav className="navbar navbar-default">
    <ul className="nav navbar-nav">
      <li><NavLink to="/flip" activeStyle={styles.active}>Flip</NavLink></li>
      <li><NavLink to="/guessnumber" activeStyle={styles.active}>Guessnumber</NavLink></li>
      <li><NavLink to="/fizzbuzz" activeStyle={styles.active}>Fizzbuzz</NavLink></li>
      <li><NavLink to="/auth" activeStyle={styles.active}>Auth</NavLink></li>
    </ul>
  </nav>

export default Nav
