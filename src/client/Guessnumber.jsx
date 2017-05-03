import React from 'react'

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

  renderOutput() {
    if (!this.state.guessed) {
      return null
    }
    if (this.state.guessed === this.state.number) {
      return <div style={styles.success}>Success! The number is {this.state.number}</div>
    }
    if (this.state.guessed < this.state.number) {
      return <div style={styles.failure}>Too low!</div>
    }
    return <div style={styles.failure}>Too high!</div>
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Guess Number</h2>
        <p className="lead">Guess a number between 1-100</p>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="input-group">
              <input className="form-control" type="number" value={this.state.guessInput} placeholder="Place your guess here" min={1} max={100} />
              <span className="input-group-btn">
                <button className="btn btn-primary">Guess</button>
              </span>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">
              {this.renderOutput()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GuessnumberApp
