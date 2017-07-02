// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'
import Flip from './Flip'
import Guessnumber from './guessnumber'
import Fizzbuzz from './fizzbuzz'
import Auth from './auth'

const render = (AppComponent, AppTarget) => {
  ReactDOM.render(
    <AppComponent />,
    document.querySelector(AppTarget),
  )
}

render(Welcome, '#welcome-app')
render(Flip, '#flip-app')
render(Guessnumber, '#guessnumber-app')
render(Fizzbuzz, '#fizzbuzz-app')
render(Auth, '#auth-app')


if (module.hot) {
  console.log(module)
  // flow-disable-next-line
  module.hot.accept('./Welcome', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./Welcome').default
    render(nextApp)
  })
}
