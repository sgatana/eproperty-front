import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import registerUser from '../../../actions/registerUser'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      idNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
      mobileNumber: '',
      errors: ''

    }
  }
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleRegister = async evt => {
    evt.preventDefault()
    const { idNumber, email, lastName, firstName, mobileNumber, role, password } = this.state
    const user = {
      idNumber,
      email,
      lastName,
      firstName,
      mobileNumber,
      role,
      password
    }
    this.props.registerUser(user, this.props.history)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  render() {
    const { idNumber, email, lastName, firstName, mobileNumber, role, password, errors } = this.state

    return (
      <div className="container content">
        <div className="row" >
          <div className="col-md-8" style={{ color: 'white', textAlign: 'justify' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat quam et pulvinar tincidunt. Sed faucibus nunc a dui euismod pellentesque. Suspendisse euismod, odio nec ultricies porta, enim ante malesuada quam, interdum lacinia eros massa id sapien. Nam pharetra nisl dignissim metus mollis molestie. Maecenas sit amet urna eu augue tincidunt lacinia. Cras blandit elit ut cursus lobortis. Sed ut eleifend arcu. Maecenas faucibus convallis diam at malesuada. Pellentesque ullamcorper mollis nibh tincidunt suscipit. Integer rhoncus justo eu lorem luctus hendrerit. Suspendisse a eros non nisl porta porta id sit amet quam. Donec iaculis ligula id elit bibendum, nec varius felis facilisis. Nam congue arcu in ligula posuere scelerisque. Morbi vestibulum odio semper leo congue, quis varius justo consequat.

    adipiscing elit.in tempor justo imperdiet nec. Etiam eu diam vitae quam rutrum porttitor. Phasellus cursus arcu rhoncus felis consequat vehicula. Donec vitae tellus lorem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra laoreet metus, et mollis orci facilisis sed. Etiam quis gravida nulla. Integer gravida venenatis neque condimentum egestas. Quisque eu diam ultrices, hendrerit nunc at, consectetur dui. Donec ac lacus eget elit eleifend efficitur. In vel ligula vitae dui lobortis pretium. In vel semper mi. Nulla justo est, luctus sed mauris quis, pulvinar mollis ipsum. Pellentesque ornare pulvinar augue in egestas. I am here at the end
          </p>

          </div>
          <div className="col-md-4">
            <div className="form">
              <p className="text-center"><i className="fa fa-user-circle userIcon"></i></p>
              <h2 className="text-center form-header">Sign Up to E~Property <hr /></h2>
              <form onSubmit={this.handleRegister} noValidate={true}>
                <div style={{ color: 'red' }}>{errors}</div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-id-card"></i>
                    </span>
                  </div>
                  <input type="text" name="idNumber" value={idNumber} onChange={this.handleInputChange} className="form-control" placeholder="Enter your id number" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} className="form-control" placeholder="Enter your id first name" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} className="form-control" placeholder="Enter your id last name" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input type="email" name="email" value={email} onChange={this.handleInputChange} className="form-control" placeholder="Enter your email" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock mr-1"></i>
                    </span>
                  </div>
                  <input type="password" name="password" value={password} onChange={this.handleInputChange} className="form-control" placeholder="Enter your id password" />
                </div>
                <select value={role} onChange={this.handleInputChange} className="form-control mb-3 test-center selectButton" placeholder="" name="role">
                  <option defaultValue={true}>Register as</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Tenant">Tenant</option>
                </select>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-phone mr-1"></i>
                    </span>
                  </div>
                  <input type="text" name="mobileNumber" value={mobileNumber} onChange={this.handleInputChange} className="form-control" placeholder="Enter your mobile number" />
                </div>
                <button className="btn form-control button mb-4" >Sign Up <span className="fa fa-sign-in icons"></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.string
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, { registerUser })(withRouter(SignUp))