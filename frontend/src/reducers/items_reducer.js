import {RECEIVE_ALL_ITEMS} from "../actions/items_index_actions";

const ItemsReducer = (
  state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      newState.all = action.items.data;
      return newState;
    default:
      return state;
  }
};

export default ItemsReducer;
