import React from 'react'
import { Link } from 'react-router-dom'
// import '../../scss/layout/'

export default class NavbarLogin extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
  }

  isLoggedIn() {
    return (
      <div className="logout-container">
        <Link to="/profile" className="profile-icon">
          <i class="far fa-user fa-lg"></i>
        </Link>
        <button className='logout-button' onClick={this.logoutUser}>Log out</button>
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
          <span className="top-buttons">Sign up</span>
        </Link>
      </div>
    );
  }

  render () {
    return (
      <div>
        {this.props.loggedIn ? this.isLoggedIn() : this.isLoggedOut()}
      </div>
    )
  }
}