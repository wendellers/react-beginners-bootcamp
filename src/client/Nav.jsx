// @flow

import React from 'react'

import { NavLink } from 'react-router-dom'

const Nav = () =>
  <div className="navbar navbar-default">
    <nav className="navbar-nav nav">
      <li><NavLink to="/flip">Flip</NavLink></li>
      <li><NavLink to="/guessnumber">Guessnumber</NavLink></li>
      <li><NavLink to="/fizzbuzz">Fizzbuzz</NavLink></li>
      <li><NavLink to="/auth">Auth</NavLink></li>
    </nav>
  </div>

export default Nav
