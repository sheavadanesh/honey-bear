import { connect } from 'react-redux'
import Profile from './profile'
import { fetchUser } from '../../actions/profile_actions';
import { fetchItems } from '../../actions/items_index_actions';
import { Redirect } from 'react-router-dom';

const mSTP = state => {
  return {
    userId: state.session.user.id,
    items: Object.values(state.entities.allItems.all),
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