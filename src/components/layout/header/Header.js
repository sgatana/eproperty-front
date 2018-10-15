import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default () =>
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ color: 'white', backgroundColor: '#0a0521'}}>
    <div className="container">
        <Link className="navbar-brand" to="/">
          E~Property
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav mr-auto mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">LandLords</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Tenants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">How it Works</Link>
            </li>
          </ul>
          <ul className="my-2 my-lg-0">
             <Link className="nav-item btn btn-outline-light mr-4 my-2 " to="/login">Sign In <span className="fa fa-sign-in icons"></span></Link>
             <Link className="nav-item btn btn-outline-light" to="/signup"><span className="fa fa-user-circle-o icons"></span> Create an Account </Link>
         </ul>
        </div>
        </div>

    </nav>
  </Fragment>