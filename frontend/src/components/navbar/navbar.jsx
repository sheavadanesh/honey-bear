import React from 'react'
import logo from '../../images/honeybear-logo.png'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
  render () {
    return (
          <div>
              <div className="honeybear">
              <Link to="/">
                <img className="honeybear-logo" src={logo} alt="honeybear" />
              </Link>
              <Link to="/" className="honey-bear-header-wrapper">
                <h1 className="honeybear-header">honeybear</h1>
              </Link>
              </div>
          </div>
    );
  }
}