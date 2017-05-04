// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import FlipApp from './Flip'
import GuessnumberApp from './Guessnumber'
import FizzbuzzApp from './Fizzbuzz'
import AuthApp from './Auth'

class Mother extends React.Component {
  state = {
    role: 'guest',
    name: '',
  }

  login = (name: string) => {
    this.setState({
      role: 'user',
      name,
    })
  }

  signup = (name: string) => {
    this.setState({
      role: 'newUser',
      name,
    })
  }

  render() {
    const { name, role } = this.state
    return (
      <div>
        <h1>Mother knows best!</h1>
        <Nav role={role} name={name} />
        <Switch>
          <Route exact path={'/flip'} component={FlipApp} />
          <Route exact path={'/guessnumber'} component={GuessnumberApp} />
          <Route exact path={'/fizzbuzz'} component={FizzbuzzApp} />
          <Route exact path={'/auth'} render={() => <AuthApp onLogin={this.login} onSignup={this.signup} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
