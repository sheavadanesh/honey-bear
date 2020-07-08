import { connect } from 'react-redux'
import ItemsIndex from  './items_index'

const mSTP = state => {
  return {
    items: Object.values(state.entities.items),
    session: state.session.id
  }
}
//Use search api util and actions for items
const mDTP = dispatch => {
  return {
    // fetchItems: () => dispatch(fetchItems)
  }
}

export default connect(mSTP, mDTP)(ItemsIndex)