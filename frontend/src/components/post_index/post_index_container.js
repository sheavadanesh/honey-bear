import { connect } from 'react-redux';
import { fetchItems } from '../../actions/items_index_actions';
import PostIndex from './post_index';

const mSTP = state => {
    return {
        items: state.entities.items.data,
        session: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mSTP, mDTP)(PostIndex)