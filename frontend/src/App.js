import React from 'react';
import './scss/layout/navbar.scss'
import Navbar from './components/navbar/navbar'
import { Route, Switch, Redirect } from "react-router-dom";
import Splash from './components/splash'
import LoginFormContainer from './components/session/login_form_container'
import SignupFormContainer from './components/session/signup_form_container'
import Apps from './components/app'

function App() {
  return (
    <div className="Apps">
      {/* <Apps/> */}
      <header>
        <Navbar />
      </header>
      {/* <Switch>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Splash} />

        <Redirect to="/" />
        <Route path="/" component={Splash} />
      </Switch> */}
    </div>
  );
}

export default App;
