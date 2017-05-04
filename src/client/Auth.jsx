// @flow

import React from 'react'

import App from './App'

type Props = {
  onLogin: Function,
  onSignup: Function,
}

class Auth extends React.Component {
  state = {
    emailInput: '',
    nameInput: '',
    passwordInput: '',
  }

  props: Props

  render() {
    return (
      <App
        appName="Auth (using App)"
        controls={
          <div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  placeholder="Name"
                  className="form-control"
                  value={this.state.nameInput}
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={this.state.emailInput}
                  onChange={evt => this.setState({ emailInput: evt.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={this.state.passwordInput}
                  onChange={evt => this.setState({ passwordInput: evt.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block" onClick={() => this.props.onSignup(this.state.nameInput)}>Signup</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.props.onLogin(this.state.nameInput)}>Login</button>
              </div>
            </div>
          </div>
        }
        output={null}
      />
    )
  }
}

export default Auth
