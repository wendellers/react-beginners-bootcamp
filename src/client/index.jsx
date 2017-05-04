import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'

import initStore from './reduxStuff'
import Mother from './Mother'

const store = initStore()

const render = (AppComponent, reduxStore) => {
  ReactDOM.render(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AppContainer>
          <AppComponent />
        </AppContainer>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  )
}

if (module.hot) {
  module.hot.accept('./Mother', () => {
    const NextMotherApp = require('./Mother').default // eslint-disable-line global-require
    render(NextMotherApp, store)
  })
}

render(Mother, store)
