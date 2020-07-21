import React from 'react'
import '../../scss/layout/profile.scss'
import bear from '../../images/bear_profile.png'
import ItemsIndexIndv from '../items_index/items_index_indv'

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
        return <ItemsIndexIndv key={i} item={item} />
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
              <div>
                username: {user.username}
              </div>
              <div>
                email: {user.email}
              </div>
            </div>
          </div>
        </div>
        <div className="userItems-container">
          <div className="userItems">
            <h3>Community Shares</h3>
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