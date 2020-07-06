import React from 'react'
import NavbarLogin from './navbar-login'
import logo from '../../images/honeybear-logo.png'

export default class Navbar extends React.Component{
  render () {
    return (
      <div>
        <div className="honeybear">
          <img className="honeybear_logo" src={logo} />
          <h1 className="honeybear_header">honeybear</h1>
        </div>
        <div className="navbar">
          <NavbarLogin/>
        </div>
      </div>
    );
  }
}