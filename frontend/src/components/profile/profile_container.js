import { connect } from 'react-redux'
import Profile from './profile'
import { fetchItems } from '../../actions/items_index_actions';

const mSTP = state => {
  return {
    // user: Object.values(state.user),
    // session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(mSTP, mDTP)(Profile)