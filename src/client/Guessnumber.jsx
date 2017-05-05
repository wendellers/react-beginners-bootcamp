// @flow

import React from 'react'
import { connect } from 'react-redux'

import { guessnumberInputChange } from './reduxStuff'
import App from './App'

const styles = {
  success: {
    color: 'limegreen',
  },

  failure: {
    color: 'red',
  },
}

class Guessnumber extends React.Component {

  props: {
    guessed: number,
    number: number,
    guessInput: ?any,
    onGuessnumberInputChange: Function,
  }

  renderOutput() {
    const { guessed, number } = this.props
    if (!guessed) {
      return null
    }
    if (guessed === number) {
      return <div style={styles.success}>[{guessed}]: Bullseye!</div>
    }
    return <div style={styles.failure}>[{guessed}]: Too {guessed > number ? 'High' : 'Low'}...</div>
  }

  render() {
    return (
      <App
        appName="Guessnumber (using App)"
        controls={
          <div className="input-group">
            <input
              value={this.props.guessInput}
              onChange={evt => this.props.onGuessnumberInputChange(Number(evt.target.value))}
              className="form-control"
              type="number"
              placeholder="Place your guess here"
              min={1}
              max={100}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={() => this.guess()}>Guess</button>
            </span>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

const mapStateToProps = state => ({
  number: state.guessnumberNumber,
  guessed: state.guessnumberGuessed,
  guessInput: state.guessnumberGuessInput,
})

const mapDispatchToProps = dispatch => ({
  onGuessnumberInputChange: (number: number) => dispatch(guessnumberInputChange(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Guessnumber)
