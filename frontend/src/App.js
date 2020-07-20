import React from 'react';
import './scss/layout/navbar.scss'
import Navbar from './components/navbar/navbar'
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormContainer from './components/session/login_form_container'
import SignupFormContainer from './components/session/signup_form_container'
import SearchBarContainer from './components/search_bar/search_bar_container'
import NavbarContainer from './components/navbar/navbar_container'
import PostIndexContainer from './components/post_index/post_index_container';
import ItemsIndexContainer from './components/items_index/items_index_container'
import ProfileContainer from './components/profile/profile_container'
import Engineers from './components/engineers'

function App() {
  return (
    <div className="Apps">
      <header>
        <div className="honeybear-parent-container">
          <div className="honeybear-wrapper">
            <div className="honeybear-flex-container">
                <Navbar /> 
              <div className="navbar">
                <NavbarContainer/>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Switch>
        <Route exact path="/items" component={ItemsIndexContainer} />
        <Route exact path="/allitems" component={PostIndexContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/engineers" component={Engineers} />
        <Route exact path="/" component={SearchBarContainer} />

        <Redirect to="/" />
        <Route path="/" component={SearchBarContainer} />
      </Switch>
    </div>
  );
}

export default App;
