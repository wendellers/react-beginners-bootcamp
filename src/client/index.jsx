import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css'

import Mother from './Mother'

const render = (AppComponent) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

if (module.hot) {
  module.hot.accept('./Mother', () => {
    const NextMotherApp = require('./Mother').default // eslint-disable-line global-require
    render(NextMotherApp)
  })
}

render(Mother)
