import React from 'react'
import '../../scss/layout/profile.scss'
import bear from '../../images/bear_profile.png'

class Profile extends React.Component {
  constructor(props){
    super(props)
    
  }

  componentDidMount() {
    let id = this.props.userId
    
    this.props.fetchUser(id)
    this.props.fetchItems()
    
    // this.props.fetchItems()
  }

  render () {
    debugger
    const { user, items } = this.props
    return (
      <div className="parent-profile">
        <div className="profile-container">
          {/* User info */}
          <div className="profile-picture">
            <img src={bear} alt="picture"/>
          </div>
          <div className="profile-info">
            <div className="profile-info-left">
              <div className="fullname">
                <h2>Honey Bear</h2>
              </div>
              <div>
                username: demouser
              </div>
              <div>
                email: honeybear@honeybear.com
              </div>
            </div>
            {/* {user.fname user.lname} */}
            {/* <div className="profile-info-right">
              <div className="shared-items">
                <h4>Sharing</h4> 
                <h2>15</h2>
                <h4>items</h4>
              </div>
              {/* Sharing: {user.items.length} items
            </div> */}
          </div>
        </div>
        <div className="userItems-container">
          <div className="userItems">
            <h3>Community Shares</h3>
          </div>
          <div className="userItems">
            <ul className="useritems-list">
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
              <li>item6</li>
              <li>item7</li>
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