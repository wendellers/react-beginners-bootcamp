// @flow

import React from 'react'
import { connect } from 'react-redux'

import { guessHeads, guessTails } from './reduxStuff'
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
  flipResult: string,
  guessed: ?string,
  isProcessing: boolean,
  onGuessHeads: Function,
  onGuessTails: Function,
}

class FlipApp extends React.Component {
  props: Props

  renderOutput() {
    const { flipResult, guessed } = this.props
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
      <div>
        { this.props.isProcessing && <h3>Loading ...</h3> }
        <App
          appName="Flip (using App)"
          controls={
            <div className="row">
              <div className="col-md-4">
                <button className="btn btn-primary btn-block" onClick={() => this.props.onGuessHeads()}>Heads</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-block" onClick={() => this.props.onGuessTails()}>Tails</button>
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  score: state.flipScore,
  isProcessing: state.isFlipProcessing,
  flipResult: state.flipResult,
  flipGuessed: state.flipGuessed,
})

const mapDispatchToProps = dispatch => ({
  onGuessHeads: () => dispatch(guessHeads()),
  onGuessTails: () => dispatch(guessTails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlipApp)
