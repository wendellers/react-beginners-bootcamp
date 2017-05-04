// @flow

import React from 'react'

import { NavLink } from 'react-router-dom'

type Props = {
  role: string,
  name: string,
}

const renderWelcomeMessage = (role, name) => {
  if (role === 'guest') {
    return <div className="navbar-text navbar-right">Hello, guest</div>
  }
  if (role === 'user') {
    return <div className="navbar-text navbar-right">Welcome back {name}!</div>
  }
  return <div className="navbar-text navbar-right">Welcome aboard, {name}!</div>
}

const Nav = ({ role, name }: Props) =>
  <div className="navbar navbar-default">
    <nav className="navbar-nav nav">
      <li><NavLink to="/flip">Flip</NavLink></li>
      <li><NavLink to="/guessnumber">Guessnumber</NavLink></li>
      <li><NavLink to="/fizzbuzz">Fizzbuzz</NavLink></li>
      <li><NavLink to="/auth">Auth</NavLink></li>
    </nav>
    {renderWelcomeMessage(role, name)}
  </div>

export default Nav
