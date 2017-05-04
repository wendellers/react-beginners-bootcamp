// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    fontWeight: 'bold',
  },
}

type Props = {
  role: string,
  name: string,
}

const Nav = ({ role, name }: Props) =>
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink to="/flip" activeStyle={styles.active}>Flip</NavLink></li>
        <li><NavLink to="/guessnumber" activeStyle={styles.active}>Guessnumber</NavLink></li>
        <li><NavLink to="/fizzbuzz" activeStyle={styles.active}>Fizzbuzz</NavLink></li>
        <li><NavLink to="/auth" activeStyle={styles.active}>Auth</NavLink></li>
        <li><NavLink to="/score" activeStyle={styles.active}>Score</NavLink></li>
      </ul>
      <div className="navbar-text navbar-right">
        {!name && 'Hi Stranger'}
        {role === 'newUser' && `Welcome aboard ${name}!`}
        {role === 'user' && `Welcome back ${name}`}
      </div>
    </div>
  </nav>

export default Nav
