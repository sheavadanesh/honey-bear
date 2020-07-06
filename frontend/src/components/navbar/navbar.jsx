import React from 'react'
import NavbarLogin from './navbar-login'
import logo from '../../images/honeybear-logo.png'

export default class Navbar extends React.Component{
  render () {
    return (
      <div className='honeybear-parent-container'>
        <div className='honeybear-wrapper'>

          <div className='honeybear-flex-container'>
            <div className="honeybear">
              <img className="honeybear-logo" src={logo} />
              <h1 className="honeybear-header">honeybear</h1>
            </div>
            <div className="navbar">
              <NavbarLogin/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}