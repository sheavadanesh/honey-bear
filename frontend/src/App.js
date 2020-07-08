import React from 'react';
import './scss/layout/navbar.scss'
import Navbar from './components/navbar/navbar'
import { Route, Switch, Redirect } from "react-router-dom";
import Splash from './components/splash'
import LoginFormContainer from './components/session/login_form_container'
import SignupFormContainer from './components/session/signup_form_container'
import SearchBarContainer from './components/search_bar/search_bar_container'
// import ItemsIndexContainer from './components/items_index/items_index_container'


function App() {
  return (
    <div className="Apps">
      <header>
        <Navbar />
      </header>
      <Switch>
        {/* <Route exact path="/index" component={ItemsIndexContainer} /> */}
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchBarContainer} />


        <Redirect to="/" />
        <Route path="/" component={SearchBarContainer} />
      </Switch>
    </div>
  );
}

export default App;
