import React from 'react'
import { Link } from 'react-router-dom'

export default class NavbarLogin extends React.Component {
  isLoggedIn() {
    return (
      <div>
        {/* <Link to='/logout'> */}
          Logout
        {/* </Link> */}
      </div>
    )
  }

  isLoggedOut() {
    return (
      <div>
        <Link to="/login" className="login">
          <span className="top-buttons">Log in</span>
        </Link>
        <Link to="/signup" className="signup">
          <span className="top-buttons signup">Sign up</span>
        </Link>
      </div>
    );
  }

  render () {
    return (
      <div>
        {this.props.currentUser ? this.isLoggedIn() : this.isLoggedOut()}
      </div>
    )
  }
}