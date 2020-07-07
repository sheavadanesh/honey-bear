import React from 'react'
import NavbarLogin from './navbar-login'
import logo from '../../images/honeybear-logo.png'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
  render () {
    return (
      <div className="honeybear-parent-container">
        <div className="honeybear-wrapper">
          <div className="honeybear-flex-container">
            <div className="honeybear">
              <Link to="/">
                <img className="honeybear-logo" src={logo} alt="honeybear" />
              </Link>
              <Link to="/" className="honey-bear-header-wrapper">
                <h1 className="honeybear-header">honeybear</h1>
              </Link>
            </div>
            <div className="navbar">
              <NavbarLogin />
            </div>
          </div>
        </div>
      </div>
    );
  }
}