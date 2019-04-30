import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import Main from './components/main/Main'
import SignUp from './components/main/Accounts/SignUp';
import Login from './components/main/Accounts/Login'

class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Footer />
          </Fragment>
        </Router>

    );
  }
}

export default App;
