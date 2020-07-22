import React from 'react'
import '../../scss/layout/profile.scss'
import bear from '../../images/bear_profile.png'
import ProfileItem from './profile_item'

class Profile extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    let id = this.props.userId
    
    this.props.fetchUser(id)
    this.props.fetchItems()
  }

  render () {
    const { user, items, userId } = this.props
    if (!user) return null
    
    const item = items.map((item, i) => {
      if (item.user === userId ){
        return <ProfileItem key={i} item={item} />
      }
    })
    

    return (
      <div className="parent-profile">
        <div className="profile-container">
          <div className="profile-picture">
            <img src={bear} alt="picture"/>
          </div>
          <div className="profile-info">
            <div className="profile-info-left">
              <div className="fullname">
                <h2>{user.firstname} {user.lastname}</h2>
              </div>
              <div className='member-since'>member since {user.createdAt.slice(0, 4)}</div>
              <div className='user-info'>
                Username: <span> {user.username}</span>
                <br></br>
                Email: <span> {user.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="userItems-container">
          <div className="userItems">
            <h3>community shares</h3>
          </div>
          <div className="userItems">
            <ul className="useritems-list">
              {item}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile