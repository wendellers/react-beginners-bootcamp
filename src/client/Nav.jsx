// @flow

import React from 'react'

import { NavLink } from 'react-router-dom'

type Props = {
  role: string,
  name: string,
}

const Nav = ({ role, name }: Props) =>
  <div className="navbar navbar-default">
    <div className="container">
      <nav className="navbar-nav nav">
        <li><NavLink to="/flip">Flip</NavLink></li>
        <li><NavLink to="/guessnumber">Guessnumber</NavLink></li>
        <li><NavLink to="/fizzbuzz">Fizzbuzz</NavLink></li>
        <li><NavLink to="/auth">Auth</NavLink></li>
        <li><NavLink to="/score">Score</NavLink></li>
      </nav>
      <div className="navbar-text navbar-right">
        {role === 'guest' && 'Hello, guest'}
        {role === 'user' && `welcomeback, ${name}`}
        {role === 'newUser' && `welcome aboard, ${name}`}
      </div>
    </div>
  </div>

export default Nav
