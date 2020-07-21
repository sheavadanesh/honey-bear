import { connect } from 'react-redux'
import Profile from './profile'
import { fetchUser } from '../../actions/profile_actions';
import { fetchItems } from '../../actions/items_index_actions';

const mSTP = state => {
  debugger
  return {
    userId: state.session.user.id,
    items: state.entities.allItems,
    user: state.entities.user.data
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(mSTP, mDTP)(Profile)