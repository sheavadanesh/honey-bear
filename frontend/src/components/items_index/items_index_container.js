import { connect } from 'react-redux'
import ItemsIndex from  './items_index'

const mSTP = state => {
  return {
    items: state.entities.items.data,
    session: state.session.id
  }
}
//Use search api util and actions for items
// const mDTP = dispatch => {
//   return {
//     search: item => dispatch(search(item))
//   }
// }

export default connect(mSTP, null)(ItemsIndex)