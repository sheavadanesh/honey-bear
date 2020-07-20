import React from 'react'

class Profile extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render () {
    const { user, items } = this.props
    return (
      <div>
        <div className="profile-container">
          {/* User info */}
          <div className="profile-picture">
            <img src="" alt="picture"/>
          </div>
          <div className="profile-info">
            {/* {user.fname user.lname} */}
            {/* Sharing: {user.items.length} items */}
          </div>
        </div>
        <div className="userItems-contianer">
          <div className="userItems">
            <h3>Community Shares</h3>
          </div>
          <div className="userItems">
            <ul className="useritems-list">
              something here
              {/* {items.map((item, i) => <ItemsIndexIndv key={i} item={item} />)} */}
            </ul>
            {/* User items */}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile