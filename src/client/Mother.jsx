// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import FlipApp from './Flip'
import GuessnumberApp from './Guessnumber'
import FizzbuzzApp from './Fizzbuzz'
import AuthApp from './Auth'
import ScorePage from './ScorePage'

class Mother extends React.Component {
  state = {
    role: 'guest',
    name: '',
    flipScore: 0,
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

  updateScore = (diff: number) => {
    this.setState({ flipScore: this.state.flipScore + diff })
  }

  flipReset = () => this.setState({ flipScore: 0 })

  render() {
    const { name, role, flipScore } = this.state
    return (
      <div>
        <h1>Mother knows best!</h1>
        <Nav role={role} name={name} />
        <Switch>
          <Route
            exact
            path={'/flip'} render={() =>
              <FlipApp
                onReset={this.flipReset}
                onUpdateScore={this.updateScore}
                score={this.state.flipScore}
              />
            }
          />
          <Route exact path={'/guessnumber'} component={GuessnumberApp} />
          <Route exact path={'/fizzbuzz'} component={FizzbuzzApp} />
          <Route exact path={'/auth'} render={() => <AuthApp onLogin={this.login} onSignup={this.signup} />} />
          <Route exact path={'/score'} render={() => <ScorePage flipScore={flipScore} />} />
        </Switch>
      </div>
    )
  }
}

export default Mother
