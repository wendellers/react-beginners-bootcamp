import React from 'react'

class AuthApp extends React.Component {
  state = {
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    name: '',
    role: 'guest',
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
                <input placeholder="Name" value={this.state.nameInput} className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input type="email" value={this.state.emailInput} placeholder="Email" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input type="password" value={this.state.passwordInput} placeholder="Password" className="form-control" />
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
