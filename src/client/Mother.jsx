// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Flip from './Flip'

const Mother = () =>
  <div>
    <h1>Hello my children!</h1>
    <h2>Im your mother and you WILL love me DIBA?!</h2>
    <Switch>
      <Route path="/" component={Flip} />
    </Switch>
  </div>

export default Mother
