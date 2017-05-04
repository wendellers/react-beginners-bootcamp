// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Flip from './Flip'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'

class Mother extends React.Component {
  state = {
    role: 'guest',
    name: '',
  }

  login = (name: string) => {
    this.setState({ role: 'user', name })
  }

  signup = (name: string) => {
    this.setState({ role: 'newUser', name })
  }

  render() {
    const { role, name } = this.state
    return (
      <div>
        <h1>Hello my children!</h1>
        <h2>Im your mother and you WILL love me DIBA?!</h2>
        <Nav role={role} name={name} />
        <Switch>
          <Route path="/flip" component={Flip} />
          <Route path="/guessnumber" component={Guessnumber} />
          <Route path="/fizzbuzz" component={Fizzbuzz} />
          <Route path="/auth" render={() => <Auth onLogin={this.login} onSignup={this.signup} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
