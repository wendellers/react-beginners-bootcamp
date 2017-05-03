// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import FlipApp from './Flip'
import GuessnumberApp from './Guessnumber'
import FizzbuzzApp from './Fizzbuzz'
import AuthApp from './Auth'

const Mother = () =>
  <div>
    <h1>Mother knows best!</h1>
    <Nav />
    <Switch>
      <Route exact path={'/flip'} component={FlipApp} />
      <Route exact path={'/guessnumber'} component={GuessnumberApp} />
      <Route exact path={'/fizzbuzz'} component={FizzbuzzApp} />
      <Route exact path={'/auth'} component={AuthApp} />
    </Switch>
  </div>

export default Mother
