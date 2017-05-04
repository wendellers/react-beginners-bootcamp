// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Flip from './Flip'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'

const Mother = () =>
  <div>
    <h1>Hello my children!</h1>
    <h2>Im your mother and you WILL love me DIBA?!</h2>
    <Nav />
    <Switch>
      <Route path="/flip" component={Flip} />
      <Route path="/guessnumber" component={Guessnumber} />
      <Route path="/fizzbuzz" component={Fizzbuzz} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </div>

export default Mother
