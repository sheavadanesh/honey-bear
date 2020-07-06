import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Splash from './splash'
import LoginFormContainer from'./session/login_form_container'
import SignupFormContainer from "./session/signup_form_container";
import '../images/honeybear-logo.png'
// import MainPage from './main/main_page'; --may add this later on
import Navbar from './navbar/navbar';

const Apps = () => {
    return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Splash} />

        <Redirect to="/" />
        <Route path="/" component={Splash} />
      </Switch>
    </div>
  )
    // <Switch>
    //     <AuthRoute exact path="/" component={Navbar} />
    //     {/* for now the component is Navbar, but can change to MainPage later on */}
    // </Switch>
}

export default Apps;