import { RECEIVE_ITEM } from "../actions/search_bar_actions"

const SearchBarReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_ITEM:
      return action.item
    default:
      return state;
  }
}

export default SearchBarReducer