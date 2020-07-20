import { connect } from 'react-redux'
import Profile from './profile'

const mSTP = state => {
  return {
    user: Object.values(state.user),
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(Profile)