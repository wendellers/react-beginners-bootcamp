// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'
import Flip from './Flip'

const render = (AppComponent, AppTarget) => {
  ReactDOM.render(
    <AppComponent />,
    document.querySelector(AppTarget),
  )
}

render(Welcome, '#welcome-app')
render(Flip, '#flip-app')

if (module.hot) {
  console.log(module)
  // flow-disable-next-line
  module.hot.accept('./Welcome', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./Welcome').default
    render(nextApp)
  })
}
