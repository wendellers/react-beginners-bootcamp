import React from 'react'

import App from './App'

const styles = {
  failure: {
    color: 'red',
  },
  success: {
    color: 'limegreen',
  },
}

class GuessnumberApp extends React.Component {
  state = {
    guessInput: '',
    guessed: null,
    number: 73,
  }

  guess() {
    this.setState({
      guessed: this.state.guessInput,
    })
  }

  renderOutput() {
    const { guessed, number } = this.state
    if (!guessed) {
      return null
    }
    if (guessed === number) {
      return <div style={styles.success}>Success! The number is {number}</div>
    }
    if (guessed < number) {
      return <div style={styles.failure}>Too low!</div>
    }
    return <div style={styles.failure}>Too high!</div>
  }

  render() {
    return (
      <App
        title="Guess Number (reusable)"
        controls={
          <div className="input-group">
            <input
              className="form-control"
              type="number"
              value={this.state.guessInput}
              placeholder="Place your guess here"
              onChange={evt => this.setState({ guessInput: Number(evt.target.value) })}
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

export default GuessnumberApp
