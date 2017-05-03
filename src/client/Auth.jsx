import React from 'react'

class AuthApp extends React.Component {
  state = {
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    name: '',
    role: 'guest',
  }

  renderOutput() {
    if (this.state.role === 'guest') {
      return <div>Hi stranger</div>
    }
    if (this.state.role === 'newUser') {
      return <div>Welcome aboard {this.state.name}!</div>
    }
    return <div>Welcome back {this.state.name}!</div>
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Auth app!</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  placeholder="Name"
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
                  value={this.state.nameInput}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="email"
                  onChange={evt => this.setState({ emailInput: evt.target.value })}
                  value={this.state.emailInput}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="password"
                  onChange={evt => this.setState({ passwordInput: evt.target.value })}
                  value={this.state.passwordInput}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block">Signup</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block">Login</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well" />
          </div>
        </div>
      </div>
    )
  }
}
export default AuthApp
