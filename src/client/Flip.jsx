// @flow

import React from 'react'
import { connect } from 'react-redux'

import { guessHeads } from './reduxStuff'
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

type Props = {
  score: number,
  onScoreChange: Function,
}

class FlipApp extends React.Component {
  state = {
    flipResult: '',
    guessed: '',
  }

  props: Props

  reset() {
    this.setState({ flipResult: '', guessed: '' })
  }

  renderOutput() {
    const { flipResult, guessed } = this.state
    if (!flipResult) {
      return null
    }
    if (flipResult === guessed) {
      return <div style={styles.success}>{flipResult}: You win!</div>
    }
    return <div style={styles.failure}>{flipResult}: You lose!</div>
  }

  render() {
    return (
      <App
        appName="Flip (using App)"
        controls={
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-primary btn-block" onClick={() => this.props.onGuessHeads()}>Heads</button>
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
            <span style={styles.score}>Score: <strong>{this.props.score}</strong></span>
            {this.renderOutput()}
          </div>
        }
      />
    )
  }
}

const mapStateToProps = state => ({
  score: state.flipScore,
})

const mapDispatchToProps = dispatch => ({
  onGuessHeads: () => dispatch(guessHeads()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlipApp)
