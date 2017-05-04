// @flow

import React from 'react'

import App from './App'

const styles = {
  score: {
    color: 'green',
  },
  success: {
    color: 'limegreen',
  },
  failure: {
    color: 'red',
  },
}

class FlipApp extends React.Component {
  state = {
    score: 0,
    guessed: '',
    flipResult: '',
  }

  guess(guessed: string) {
    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    this.setState({
      guessed,
      flipResult,
      score: guessed === flipResult ? this.state.score + 1 : this.state.score - 1,
    })
  }

  reset() {
    this.setState({
      score: 0,
      guessed: '',
      flipResult: '',
    })
  }

  renderOutput() {
    const { guessed, flipResult } = this.state
    if (!guessed) {
      return null
    }
    if (guessed === flipResult) {
      return <p style={styles.success}>Horray! {guessed}</p>
    }
    return <p style={styles.failure}>Boohoo! {guessed}</p>
  }

  render() {
    return (
      <App
        title="Flip (Reusable)"
        controls={
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-primary btn-block" onClick={() => this.guess('Heads')}>Heads</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-block" onClick={() => this.guess('Tails')}>Tails</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
            </div>
          </div>
        }
        output={
          <div>
            <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
            {this.renderOutput()}
          </div>
        }
      />
    )
  }
}
export default FlipApp
