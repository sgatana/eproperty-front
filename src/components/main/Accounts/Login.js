import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      idNumber: '',
      password: '',
      errors: ''
    }
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleLogin = event => {
    event.preventDefault()
    const { idNumber, password } = this.state
    const loginData = {
      idNumber,
      password
    }
    this.props.signInUser(loginData, this.props.history)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }
  render() {
    const { idNumber, password, errors } = this.state
    return (
      <div className="container content">
        <div className="row">
          <div
            className="col-md-8"
            style={{ color: 'white', textAlign: 'justify' }}
          />
          <div className="col-md-4">
            <div className="form ">
              <p className="text-center">
                <i className="fa fa-user-circle userIcon" />
              </p>
              <h2 className="text-center form-header">
                Sign in to E~Property <hr />
              </h2>
              <form onSubmit={this.handleLogin}>
                <span>{errors ? errors : ''}</span>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="idNumber"
                    value={idNumber}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter your id number"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter your id password"
                  />
                </div>
                <button className="btn button btn form-control mb-4">
                  Login <span className="fa fa-sign-in icons" />
                </button>
              </form>
              <p className="text-center">OR</p>
              <button className="btn form-control button mb-4">
                Sign In with <span className="fa fa-google icons">oogle</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
