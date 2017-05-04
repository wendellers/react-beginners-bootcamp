import React from 'react'

import App from './App'

class AuthApp extends React.Component {
  state = {
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    name: '',
    role: 'guest',
  }

  signup() {
    this.setState({
      name: this.state.nameInput,
      role: 'newUser',
    })
  }

  login() {
    this.setState({
      name: this.state.nameInput,
      role: 'user',
    })
  }

  renderOutput() {
    const { role, name } = this.state
    if (role === 'guest') {
      return <div>Hi stranger</div>
    }
    if (role === 'newUser') {
      return <div>Welcome aboard {name}!</div>
    }
    return <div>Welcome back {name}!</div>
  }

  render() {
    const { nameInput, emailInput, passwordInput } = this.state
    return (
      <App
        title="Auth (Reusable)"
        controls={
          <div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  placeholder="Name"
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
                  value={nameInput}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="email"
                  onChange={evt => this.setState({ emailInput: evt.target.value })}
                  value={emailInput}
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
                  value={passwordInput}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block" onClick={() => this.signup()}>Signup</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.login()}>Login</button>
              </div>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default AuthApp
