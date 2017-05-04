# Module 2

## TOC

- [step 0 - set the stage](#step-0-set-the-stage)
- [step 1 - routing](#step-1-routing)
- [step 2 - auth and functions as props]
- [step 3 - score page - more functions as props]

## step 0 - set the stage
```bash
$ git checkout module2
$ yarn install
```

## step 1 - routing
Let's pack all our apps in a "mother" app, with a route for each "child" app. create `src/client/Mother.jsx`:
```jsx
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

```
modify `src/client/index.html`:
```diff
-  <style>
-    .app-container {
-      border-top: 1px solid #eee;
-    }
-  </style>

-  <h1>html outside of react</h1>
-  <div id="flip-app"></div>
-  <div id="guessnumber-app"></div>
-  <div id="fizzbuzz-app"></div>
-  <div id="auth-app"></div>
-  <div id="series-app"></div>
+  <div id="root"></div>
```
modify `src/client/index.jsx`:
```diff
import ReactDOM from 'react-dom'
+import { BrowserRouter } from 'react-router-dom'

-import FlipApp from './Flip'
-import GuessnumberApp from './Guessnumber'
-import FizzbuzzApp from './Fizzbuzz'
-import AuthApp from './Auth'
-import SeriesApp from './Series'
+import Mother from './Mother'

-const render = (AppComponent, appName) => {
+const render = (AppComponent) => {
   ReactDOM.render(
-    <AppContainer>
-      <AppComponent />
-    </AppContainer>,
-    document.getElementById(`${appName}-app`),
+    <BrowserRouter>
+      <AppContainer>
+        <AppComponent />
+      </AppContainer>
+    </BrowserRouter>,
+    document.getElementById('root'),
   )
 }

 if (module.hot) {
-  module.hot.accept('./Flip', () => {
-    const NextFlipApp = require('./Flip').default // eslint-disable-line global-require
-    render(NextFlipApp, 'flip')
-  })
-
-  module.hot.accept('./Guessnumber', () => {
-    const NextGuessnumberApp = require('./Guessnumber').default // eslint-disable-line global-require
-    render(NextGuessnumberApp, 'guessnumber')
-  })
-
-  module.hot.accept('./Fizzbuzz', () => {
-    const NextFizzbuzzApp = require('./Fizzbuzz').default // eslint-disable-line global-require
-    render(NextFizzbuzzApp, 'fizzbuzz')
-  })
-
-  module.hot.accept('./Auth', () => {
-    const NextAuthApp = require('./Auth').default // eslint-disable-line global-require
-    render(NextAuthApp, 'auth')
-  })
-
-  module.hot.accept('./Series', () => {
-    const NextSeriesApp = require('./Series').default // eslint-disable-line global-require
-    render(NextSeriesApp, 'series')
+  module.hot.accept('./Mother', () => {
+    const NextMotherApp = require('./Mother').default // eslint-disable-line global-require
+    render(NextMotherApp)
  })
}

-render(FlipApp, 'flip')
-render(GuessnumberApp, 'guessnumber')
-render(FizzbuzzApp, 'fizzbuzz')
-render(AuthApp, 'auth')
-render(SeriesApp, 'series')
+render(Mother)
```
modify `src/client/App.jsx`
```diff
-  <div className="container app-container">
+  <div className="container">
```
create `src/client/Nav.jsx`:
```jsx
// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    fontWeight: 'bold',
  },
}

const Nav = () =>
  <nav className="navbar navbar-default">
    <ul className="nav navbar-nav">
      <li><NavLink to="/flip" activeStyle={styles.active}>Flip</NavLink></li>
      <li><NavLink to="/guessnumber" activeStyle={styles.active}>Guessnumber</NavLink></li>
      <li><NavLink to="/fizzbuzz" activeStyle={styles.active}>Fizzbuzz</NavLink></li>
      <li><NavLink to="/auth" activeStyle={styles.active}>Auth</NavLink></li>
    </ul>
  </nav>

export default Nav

```
see the changes in the browser and commit:
```bash
$ git add src
$ git commit -m "(module-2) step1: routing"
```

## step 2 -
